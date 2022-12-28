import { ReactElement } from "react";

export type RouteItem = {
  id: string;
  path: string;
  element: ReactElement;
  nestedRoutes?: RouteItem[];
};

export type Category = {
  id: number;
  categoryName: string;
};

export type Task = {
  id: number;
  userId: number;
  categoryId: number;
  title: string;
  status: boolean;
  category: Category;
};

export type User = {
  id: number;
  username: string;
  email: string;
};
