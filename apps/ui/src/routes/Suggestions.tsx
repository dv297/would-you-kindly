import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { Button } from "@/components/ui/button.tsx";

const Suggestions = () => {
  const params = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["suggestion", params.id],
    queryFn: async () => {
      const response = await fetch(`/api/ai/suggestion/${params.id}`);
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center w-screen">
      <p className="prose-2xl">We generated an AI summary of your cause!</p>
      <div
        className="max-w-xl prose mt-4"
        dangerouslySetInnerHTML={{ __html: `"${data?.data?.summary}"` }}
      />
      <p className="mt-4">
        We'll use this as a way for other users to quickly learn about your
        cause!
      </p>
      <Link to="/" className="mt-4">
        <Button>Back Home</Button>
      </Link>
    </div>
  );
};

export default Suggestions;
