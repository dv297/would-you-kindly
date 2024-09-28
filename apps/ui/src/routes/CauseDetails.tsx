import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";

import { Button } from "@/components/ui/button.tsx";
import Cause from "@/types/Cause.ts";

const CauseDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuery<{
    data: z.infer<typeof Cause>;
  }>({
    queryKey: [`case:${id}`],
    queryFn: async () => {
      if (!id) {
        return null;
      }

      const response = await fetch(`/api/causes/${id}`);
      const data = await response.json();
      return data;
    },
  });
  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const cause = data?.data;

  if (!cause) {
    return null;
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-3 lg:col-span-2">
          <div className="bg-white px-8 py-4 rounded-xl drop-shadow border-2 border-gray-200">
            <h1 className="prose-2xl">{cause.title}</h1>
            <h2 className="prose-lg lead">{cause.description}</h2>
            <div
              dangerouslySetInnerHTML={{ __html: cause.body }}
              className="prose-lg"
            />
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          <div className="bg-white px-4 py-2 rounded-xl h-32 drop-shadow-sm border-2 border-gray-200">
            <p className="text-2xl">Help support this cause!</p>
            <div className="mt-4">
              <Button
                variant="outline"
                className="w-full bg-yellow-400 hover:bg-yellow-500"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseDetails;
