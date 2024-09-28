import { Link } from "react-router-dom";

import CausesList from "@/components/CausesList/CausesList";
import { Button } from "@/components/ui/button";
import useCauses from "@/hooks/useCauses";

function Home() {
  const { data, isLoading } = useCauses();

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
      </div>
      <div className="p-4">
        <Button asChild>
          <Link to="/profile">Profile</Link>
        </Button>
      </div>
      <CausesList causes={data.data} />
    </div>
  );
}

export default Home;
