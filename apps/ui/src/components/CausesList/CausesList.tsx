import { Link } from "react-router-dom";
import { z } from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Cause from "@/types/Cause";

interface Props {
  causes: z.infer<typeof Cause>[];
}

const CausesList = (props: Props) => {
  const { causes } = props;
  return (
    <div className="w-full flex flex-col gap-4">
      {causes.map((cause) => {
        return (
          <div key={cause.id}>
            <Card>
              <CardHeader>
                <Link to={`/causes/${cause.id}`} className="text-blue-400">
                  <CardTitle className="prose-2xl">{cause.title}</CardTitle>
                </Link>
                <CardDescription>{cause.description}</CardDescription>
              </CardHeader>
              <CardContent dangerouslySetInnerHTML={{ __html: cause.body }} />
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default CausesList;
