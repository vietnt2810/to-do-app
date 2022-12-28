import { useQuery } from "@tanstack/react-query";

import { api } from "api/api";

export const useGetTasks = () => {
  const {
    data,
    isLoading: isTasksLoading,
    isError,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => {
      return api.get(
        `users/${
          JSON.parse(localStorage.getItem("user") as string).id
        }/tasks?_expand=category`
      );
    },
  });

  return { data, isTasksLoading, isError };
};
