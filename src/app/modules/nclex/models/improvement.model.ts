export interface ImprovementModel {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ImprovementPropertyModel {
  title: string;
  subtitle: string;
}

export interface ImprovementPropertyFetchingModel {
  title: boolean;
  subtitle: boolean;
}
