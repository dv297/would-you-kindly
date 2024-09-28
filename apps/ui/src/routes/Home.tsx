
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
      <div id="Body">
        <CarouselComp causes={data.data} />
      </div>
      <CausesList causes={data.data} />
    </div>
  );
}

export default Home;
