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
        `users/${
          JSON.parse(localStorage.getItem("user") as string).id
        }/tasks?_expand=category`
      );

      return response.data;
    },
  });

  return { tasks, isTasksLoading, isError };
};
