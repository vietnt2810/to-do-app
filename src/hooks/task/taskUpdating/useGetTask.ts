import { useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

import { Task } from "types/task.type";

export const useGetTask = (taskId: string | undefined) => {
  const queryClient = useQueryClient();

  const {
    data: task,
    isLoading: isTaskLoading,
    isError,
  } = useQuery<Task>({
    queryKey: ["task", taskId],
    queryFn: async () => {
      const response = await api.get(
        `tasks/${JSON.parse(String(localStorage.getItem("user"))).id}/${taskId}`
      );

      return response.data[0];
    },

    initialData: () => {
      const initialTask = queryClient
        .getQueryData<Task[]>(["tasks"])
        ?.find((task) => task.id === parseInt(taskId as string));

      return initialTask;
    },
  });

  return { task, isTaskLoading, isError };
};
