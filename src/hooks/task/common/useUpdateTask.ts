import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

import { UpdatedTask } from "types/task.type";

export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  const { mutate: updateTask } = useMutation({
    mutationFn: (task: UpdatedTask) => {
      console.log(task);

      return api.put(`tasks/${task.id}`, task);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { updateTask };
};
