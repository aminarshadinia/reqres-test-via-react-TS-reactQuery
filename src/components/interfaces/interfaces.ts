import { UseMutateFunction } from "react-query";

export interface Credentials {
  email: string;
  password: string;
}

export type LoginData = { token: string };

// type T = any;
// export type HookType = ({
//   onSuccess,
//   onError,
// }: {
//   onSuccess: (data: T) => void;
//   onError: (data: string) => void;
// }) => {
//   mutate: UseMutateFunction<any, unknown, T, unknown>;
//   isLoading: boolean;
// };

export interface AddUserResponse {
  createdAt: string;
  id: string;
  job: string;
  name: string;
}

export interface IUpdateUser {
  name: string;
  job: string;
  id: number;
}

export interface UpdateResponse {
  id: 0;
  name: "";
  job: "";
  updatedAt: "";
}

export interface FetchUserData {
  data: [
    {
      avatar: string;
      email: string;
      first_name: string;
      id: number;
      last_name: string;
    }
  ];
}

export interface AddUser {
  name: string;
  job: string;
}

export interface SingleData {
    data: {
      avatar: string;
      email: string;
      first_name: string;
      id: number;
      last_name: string;
    };
}

export interface MutationType<T> {
  onSuccess: (data: T) => void;
  onError: (err: unknown) => void;
}
