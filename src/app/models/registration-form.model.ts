export interface RegistrationFormModel {
  name: string;
  email: string;
  institution: string;
  contactPerson: string;
  contactNumber: string;
}

export interface RegistrationPropertyModel {
  title: string;
  subtitle: string;
  buttonText: string;
}

export interface RegistrationPropertyFetchingModel {
  title: boolean;
  subtitle: boolean;
  buttonText: boolean;
}
