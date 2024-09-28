import CarouselComp from "@/components/Carousal/Carousel.tsx";
import CausesList from "@/components/CausesList/CausesList";
import useCauses from "@/hooks/useCauses";

function Home() {
  const { data, isLoading } = useCauses();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CarouselComp causes={data.data} />
      <div className="w-10/12 mx-auto">
        <CausesList causes={data.data} />
      </div>
    </div>
  );
}

export default Home;
