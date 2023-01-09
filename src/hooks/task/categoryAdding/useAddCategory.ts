import { useMutation } from "@tanstack/react-query";

import { api } from "api/api";

import { Category } from "types/task.type";

export const useAddCategory = () => {
  const { mutate: addCategory } = useMutation({
    mutationFn: (category: Omit<Category, "id">) => {
      return api.post("categories", category);
    },
  });
  return { addCategory };
};
