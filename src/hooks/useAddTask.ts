import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

type AddedTask = {
  userId: number;
  categoryId: number;
  title: string;
  status: boolean;
};

export const useAddTask = () => {
  const queryClient = useQueryClient();

  const { mutate: addTask } = useMutation({
    mutationFn: (task: AddedTask) => {
      return api.post("tasks", task);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { addTask };
};
