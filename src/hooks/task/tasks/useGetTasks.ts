import { useQuery } from "@tanstack/react-query";

import { api } from "api/api";

import { Task } from "types/task.type";

export const useGetTasks = () => {
  const {
    data: tasks,
    isLoading: isTasksLoading,
    isError,
  } = useQuery<Task[]>({
    queryKey: ["tasks"],
    queryFn: async () => {
      const response = await api.get(
        `tasks/${JSON.parse(String(localStorage.getItem("user"))).id}`
      );

      return response.data;
    },
  });

  return { tasks, isTasksLoading, isError };
};
