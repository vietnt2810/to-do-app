import { useQuery } from "@tanstack/react-query";

import { api } from "api/api";

import { Category } from "types/task.type";

export const useGetCategories = () => {
  const { data: categories } = useQuery<Category[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      const response = await api.get("categories");

      return response.data;
    },
  });

  return { categories };
};
