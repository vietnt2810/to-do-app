export type Category = {
  id: number;
  category_name: string;
};

export type Task = {
  id: number;
  user_id: number;
  category_id: number;
  title: string;
  status: boolean;
  category_name: string;
};

export type UpdatedTask = {
  id: number;
  category_id?: number;
  title?: string;
  status?: boolean;
};
