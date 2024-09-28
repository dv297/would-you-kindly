import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
  import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
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
            {causes.map((cause) =>(
              <CarouselItem key={cause.id} className="md:basis-1/2 lg:basis-1/3">
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle>{cause.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center p-2">
                        <img src={cause.image} alt="Logo" />
                    </CardContent>
                    <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                      <Button>Deploy</Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
  </div>
  )
};
export default CarouselComp;