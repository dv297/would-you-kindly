import { ReactNode, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { AppState, Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import CreateCause from "./routes/CreateCauses";

import "@/index.css";

import Layout from "@/components/Layout/Layout.tsx";
import About from "@/routes/About";
import CauseDetails from "@/routes/CauseDetails.tsx";
import Home from "@/routes/Home";
import Login from "@/routes/Login.tsx";
import Logout from "@/routes/Logout.tsx";
import Profile from "@/routes/Profile";

const queryClient = new QueryClient();

const Auth0ProviderWithRedirectCallback = ({
  children,
}: {
  children: ReactNode;
}) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState | undefined) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider
      onRedirectCallback={onRedirectCallback}
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      {children}
    </Auth0Provider>
  );
};

const App = () => {
  return (
    <Auth0ProviderWithRedirectCallback>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-cause" element={<CreateCause />} />
          <Route path="/causes">
            <Route path=":id" element={<CauseDetails />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Route>
      </Routes>
    </Auth0ProviderWithRedirectCallback>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
);
