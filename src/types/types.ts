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
