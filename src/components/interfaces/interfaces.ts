import { UseMutateFunction } from "react-query";

export interface Credentials {
  email: string;
  password: string;
}

type T = any;

export type LoginData = { token: string };

export type HookType = ({
  onSuccess,
  onError,
}: {
  onSuccess: (data: T) => void;
  onError: (data: string) => void;
}) => {
  mutate: UseMutateFunction<any, unknown, T, unknown>;
  isLoading: boolean;
};

export interface AddUserResponse {
  createdAt: string;
  id: string;
  job: string;
  name: string;
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
