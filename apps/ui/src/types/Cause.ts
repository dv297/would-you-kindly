import { z } from "zod";

const Cause = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
});

export default Cause;
