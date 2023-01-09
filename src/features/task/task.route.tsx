import { RouteItem } from "types/route.type";

import { ConstantsPathsEnum } from "constants/constants.path";
import { ITEMS_PER_PAGE } from "constants/constants.pagination";

import CategoryAdding from "./categoryAdding/CategoryAdding";
import TaskAdding from "./taskAdding/TaskAdding";
import Tasks from "./tasks/Tasks";
import TaskUpdating from "./taskUpdating/TaskUpdating";

export const TASK_ROUTES: RouteItem = {
  id: "rt2",
  path: ConstantsPathsEnum.TASK,
  element: <Tasks itemsPerPage={ITEMS_PER_PAGE} />,
  nestedRoutes: [
    {
      id: "rt2-1",
      path: ConstantsPathsEnum.ADD_TASK,
      element: <TaskAdding />,
    },
    {
      id: "rt2-2",
      path: ConstantsPathsEnum.ADD_CATEGORY,
      element: <CategoryAdding />,
    },
    {
      id: "rt2-3",
      path: ConstantsPathsEnum.EDIT_TASK,
      element: <TaskUpdating />,
    },
  ],
};
