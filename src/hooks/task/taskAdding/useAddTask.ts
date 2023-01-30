import { useMutation, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

import { Task } from "types/task.type";

export const useAddTask = () => {
  const queryClient = useQueryClient();

  const { mutate: addTask } = useMutation({
    mutationFn: (task: Omit<Task, "id" | "category" | "category_name">) => {
      return api.post("tasks", task);
    },

    onSettled: () => {
      queryClient.invalidateQueries(["tasks"]);
    },
  });
  return { addTask };
};
