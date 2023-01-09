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

export type UpdatedTask = {
  id: number;
  categoryId?: number;
  title?: string;
  status?: boolean;
};
