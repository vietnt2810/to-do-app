import { useMutation } from "@tanstack/react-query";

import { api } from "api/api";

type addedCategory = {
  categoryName: string;
};

export const useAddCategory = () => {
  const { mutate: addCategory } = useMutation({
    mutationFn: (category: addedCategory) => {
      return api.post("categories", category);
    },
  });
  return { addCategory };
};
