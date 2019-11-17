export interface PreparationModel {
  id: string;
  title: string;
  description: string;
}

export interface PreparationPropertyModel {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export interface PreparationPropertyFetchingModel {
  title: boolean;
  subtitle: boolean;
  imageUrl: boolean;
}
