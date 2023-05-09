export type BlogPath = {
  id: string;
  title: string;
};

export type BlogPost = {
  id: string;
  title: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
};
