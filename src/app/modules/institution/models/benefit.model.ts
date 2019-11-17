export interface BenefitModel {
  id: string;
  description: string;
}

export interface BenefitPropertyModel {
  title: string;
  checkIconUrl: string;
}

export interface BenefitPropertyFetchingModel {
  title: boolean;
  checkIconUrl: boolean;
}
