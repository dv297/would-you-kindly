import { Link } from "react-router-dom";

import CausesList from "@/components/CausesList/CausesList";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import useCauses from "@/hooks/useCauses";

function Home() {
  const { data, isLoading } = useCauses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <div id="Header">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/assets/100.png" alt="Logo" />
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
        <div id="carousal"></div>
      </div>
      <CausesList causes={data.data} />
    </div>
  );
}

export default Home;
