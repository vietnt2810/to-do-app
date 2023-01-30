import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationFn: (taskId: number) => {
      return api.delete(`tasks/${taskId}`);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { deleteTask };
};
