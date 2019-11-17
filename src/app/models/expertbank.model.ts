export interface ExpertbankModel {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface ExpertbankPropertyModel {
  title: string;
  buttonText: string;
}

export interface ExpertbankPropertyFetchingModel {
  title: boolean;
  buttonText: boolean;
}
