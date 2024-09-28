import { Link } from "react-router-dom";

import CausesList from "@/components/CausesList/CausesList";
import { Button } from "@/components/ui/button";
import useCauses from "@/hooks/useCauses";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from "@/components/ui/navigation-menu";

function Home() {
  const { data, isLoading } = useCauses();
function App() {
  const query = useQuery({
    queryKey: ["healthcheck"],
    queryFn: async () => {
      // All fetch calls made to the /api path will be directed to localhost:3000
      const response = await fetch("/api");
      const data = await response.json();
      return data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="font-bold text-2xl">Hackathon Starter Project</h1>
      <div className="p-4">
        <Button asChild>
          <Link to="/about">Learn More</Link>
        </Button>
    <div>
      <div id="Header">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="/assets/100.png"
              alt="Logo"
            />
          </div>
          <NavigationMenu className="flex space-x-6">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Button>
                  <Link to="home">Home</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button>
                  <Link to="about">About</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button>
                  <Link to="signIn">Sign In</Link>
                </Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button>
                  <Link to="register">Register</Link>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div id="Body">
        <div id="carousal">

        </div>
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <h1 className="font-bold text-2xl">Hackathon Starter Project</h1>
          {query?.data?.message && (
            <span className="font-semibold mt-4">
            API Health Check: {query?.data?.message}
          </span>
          )}
          <div className="p-4">
            <Button asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          <div className="p-4">
            <Button asChild>
              <Link to="/profile">Profile</Link>
            </Button>
          </div>
        </div>
      </div>
      <CausesList causes={data.data} />
    </div>
  );
}

export default Home;
