export interface User {
  id: string;
  userName: string;
  age: number;
  gender: 'Male' | 'Female' | 'Nothing';
}

export interface Goal {
  id: string;
  title: string;
  imgs: string[];
  days: number[];
  startAt: string;
  endAt: Date | null;
}
