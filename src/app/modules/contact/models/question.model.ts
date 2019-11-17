export interface QuestionFormModel {
  inquiryType: string;
  position: string;
  firstName: string;
  lastName: string;
  email: string;
  institution: string;
  question: string;
}

export interface QuestionPropertyModel {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface QuestionPropertyFetchingModel {
  title: boolean;
  subtitle: boolean;
  buttonText: boolean;
}
