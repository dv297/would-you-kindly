import { z } from "zod";

const Cause = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  body: z.string(),
  image: z.string(),
  wishlistUrl: z.string(),
  summary: z.string(),
});

export default Cause;
