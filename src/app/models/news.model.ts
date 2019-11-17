export interface NewsModel {
  id: string;
  title: string;
  date: string;
  content: string;
  imageUrl: string;
  buttonText: string;
}

export interface NewsPropertyModel {
  title: string;
}

export interface NewsPropertyFetchingModel {
  title: boolean;
}
