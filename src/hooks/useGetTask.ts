import { useQuery, useQueryClient } from "@tanstack/react-query";

import { api } from "api/api";

export const useGetTask = (taskId: string | undefined) => {
  const queryClient = useQueryClient();

  return useQuery(
    ["task", taskId],
    () => {
      return api.get(`tasks/${taskId}`);
    },
    {
      initialData: () => {
        const tasksQueryCache: any = queryClient.getQueryData(["tasks"]);

        const task = tasksQueryCache?.data?.find(
          (task: any) => task.id === parseInt(taskId as string)
        );

        if (task) {
          return { data: task };
        } else {
          return undefined;
        }
      },
      refetchOnWindowFocus: false,
    }
  );
};
