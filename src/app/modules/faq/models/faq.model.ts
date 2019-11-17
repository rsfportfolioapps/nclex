export interface FaqModel {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface FaqGroupedByCategoryModel {
  [key: string]: FaqModel[];
}
