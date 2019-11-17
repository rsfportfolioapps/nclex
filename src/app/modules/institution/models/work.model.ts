export interface WorkModel {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface WorkPropertyModel {
  title: string;
  subtitle: string;
}

export interface WorkPropertyFetchingModel {
  title: boolean;
  subtitle: boolean;
}
