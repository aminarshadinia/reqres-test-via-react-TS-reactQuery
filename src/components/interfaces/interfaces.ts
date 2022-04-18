export interface Credentials {
  email: string;
  password: string;
}

export interface UpdateUser {
  name: string;
  job: string;
  id: number;
}

export interface FetchData {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface AddUser {
  name: string;
  job: string;
}

export interface SingleData {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}