export interface GoalModel {
  id: string;
  niche: string;
  list: GoalList[];
}

export interface GoalList {
  id: string;
  description: string;
}

export interface GoalPropertyModel {
  title: string;
  checkIconUrl: string;
  avatarUrl: string;
}

export interface GoalPropertyFetchingModel {
  title: boolean;
  checkIconUrl: boolean;
  avatarUrl: boolean;
}
