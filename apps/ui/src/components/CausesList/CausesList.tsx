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
    <div className="grid gap-4">
      {causes.map((cause) => {
        return (
          <div key={cause.id}>
            <Card>
              <CardHeader>
                <CardTitle>{cause.title}</CardTitle>
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
