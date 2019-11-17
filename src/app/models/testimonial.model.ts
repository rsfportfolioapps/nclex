export interface TestimonialModel {
  id: string;
  content: string;
  avatarUrl: string;
  fullName: string;
  position: string;
  company: string;
}

export interface TestimonialPropertyModel {
  title: string;
}

export interface TestimonialPropertyFetchingModel {
  title: boolean;
}
