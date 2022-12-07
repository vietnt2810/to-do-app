import { useQuery } from "@tanstack/react-query";

import { api } from "api/api";

export const useGetCategories = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => {
      return api.get("categories");
    },
  });

  return { categories };
};
