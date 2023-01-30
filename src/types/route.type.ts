import { ReactElement } from "react";

export type RouteItem = {
  id: string;
  path: string;
  element: ReactElement;
  nestedRoutes?: RouteItem[];
};
