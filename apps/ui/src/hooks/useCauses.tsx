import { useQuery } from "@tanstack/react-query";

const useCauses = () => {
  return useQuery({
    queryKey: ["causes"],
    queryFn: async () => {
      const response = await fetch("/api/causes");
      const data = await response.json();
      return data;
    },
  });
};

export default useCauses;
