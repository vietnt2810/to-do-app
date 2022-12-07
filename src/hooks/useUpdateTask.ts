import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

type UpdatedTask = {
  id: number;
  categoryId?: number;
  title?: string;
  status?: boolean;
};

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationFn: (task: UpdatedTask) => {
      return api.patch(`tasks/${task.id}`, task);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { updateTask };
};
