export interface PlanModel {
  id: string;
  timespan: string;
  price: string;
  discount: string;
  details: string;
  packages: PlanPackageModel[];
}

export interface PlanPackageModel {
  id: string;
  description: string;
}

export interface PlanPropertyModel {
  title: string;
  subtitle: string;
  checkImageUrl: string;
  buttonText: string;
}

export interface PlanPropertyFetchingModel {
  title: boolean;
  subtitle: boolean;
  checkImageUrl: boolean;
  buttonText: boolean;
}
