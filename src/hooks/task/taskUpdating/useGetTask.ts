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
      const response = await api.get(`tasks/${taskId}?_expand=category`);

      return response.data;
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
