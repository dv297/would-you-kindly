import { ReactNode } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu.tsx";

interface NavigationMenuLinkProps {
  to: string;
  children: ReactNode;
}

const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
  const { to, children } = props;
  return (
    <NavigationMenuItem>
      <NavLink
        to={to}
        className={({ isActive }) => {
          if (isActive) {
            return "underline text-blue-800 underline-offset-4 text-xl text-nowrap";
          }

          return "text-blue-500 text-xl hover:underline text-nowrap";
        }}
      >
        {children}
      </NavLink>
    </NavigationMenuItem>
  );
};

const Layout = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="flex flex-col h-screen w-screen justify-center">
      <nav className="px-4 flex justify-between w-screen border-gray-300 border-2 h-24 fixed top-0 start-0 z-50 bg-white">
        <div className="flex-1">
          <img src="/assets/100.png" alt="Logo" className="h-20" />
        </div>
        <NavigationMenu className="flex space-x-6 flex-grow w-full justify-end px-4">
          <NavigationMenuList className="gap-6">
            <NavigationMenuLink to="/">Home</NavigationMenuLink>
            <NavigationMenuLink to="/about">About</NavigationMenuLink>
            {!isAuthenticated && (
              <>
                <NavigationMenuLink to="/profile">Sign In</NavigationMenuLink>
              </>
            )}
            {isAuthenticated && (
              <>
                <NavigationMenuLink to="create-cause">
                  Share Your Story
                </NavigationMenuLink>
                <NavigationMenuLink to="/logout">Logout</NavigationMenuLink>
              </>
            )}
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
      <div id="Body" className="bg-gray-100 p-4 h-screen mt-24 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
