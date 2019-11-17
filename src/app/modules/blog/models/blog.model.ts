export interface BlogModel {
  id: string;
  title: string;
  date: string;
  author: string;
  imageUrl: string;
}

export interface PaginateBlogModel {
  page: number;
  collectionSize: number;
  pageSize: number;
}
