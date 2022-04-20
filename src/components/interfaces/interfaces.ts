import { UseMutateFunction } from "react-query";

export interface Credentials {
  email: string;
  password: string;
}

export type LoginData = { token: string };
export type LoginArgs = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: LoginData) => void;
  onError: (data: string) => void;
}) => {
  mutate: UseMutateFunction<any, unknown, Credentials, unknown>;
  isLoading: boolean;
};
// export interface Variables { token: string };
// export interface Arrgs {
//   onSucces : (variables: Variables) => void;
//   onError: (variables: string) => void;
//   mutate: UseMutateFunction<any, unknown, Credentials, unknown>;
//   isLoading: boolean;
//   data: any;
// }

export type AddUserData = { token: string };
export type AddUserArgs = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: LoginData) => void;
  onError: (data: string) => void;
}) => {
  mutate: UseMutateFunction<any, unknown, Credentials, unknown>;
  isLoading: boolean;
  data: any;
};



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