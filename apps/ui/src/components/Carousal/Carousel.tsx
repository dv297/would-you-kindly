import { Link } from "react-router-dom";
import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Cause from "@/types/Cause";

interface Props {
  causes: z.infer<typeof Cause>[];
}

const CarouselComp = (props: Props) => {
  const { causes } = props;
  return (
    <div className="p-10">
      <Carousel>
        <CarouselContent>
          {causes.map((cause) => (
            <CarouselItem key={cause._id} className="md:basis-1/3 lg:basis-1/4">
              <div
                style={{
                  backgroundImage: `url(${cause.image})`,
                  backgroundSize: "cover",
                  width: "195px",
                  height: "420px",
                }}
                className="rounded-2xl border-2 border-gray-500 drop-shadow-md"
              >
                <div
                  style={{
                    background: "rgba(39,62,84,0.3)",
                    overflow: "hidden",
                    height: "100%",
                  }}
                  className="px-2 py-2 rounded-2xl flex flex-col"
                >
                  <div className="flex-grow">
                    <Link
                      to={`/causes/${cause._id}`}
                      className="text-white text-lg flex-grow h-full"
                    >
                      {cause.title}
                    </Link>
                  </div>
                  <div>
                    <Link to={`/causes/${cause._id}`} className="text-lg">
                      <Button className="w-full bg-yellow-600 hover:bg-yellow-700">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default CarouselComp;
