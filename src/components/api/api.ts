import { BASE_URL } from "../../env";
import axios, { AxiosRequestConfig } from "axios";
import {
  AddUser,
  AddUserResponse,
  Credentials,
  FetchUserData,
  SingleData,
  IUpdateUser,
  LoginData,
  UpdateResponse,
} from "../interfaces/interfaces";

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: `${BASE_URL}/login`,
    data,
  };
  const { data: response } = await axios.request<LoginData>(requestConfig);
  return response;
};

export const getUserList = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: `${BASE_URL}/users?page=2`,
  };
  const { data: response } = await axios.request<FetchUserData>(requestConfig);
  return response;
};

export const getSingleUser = async (id: number) => {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: `${BASE_URL}/users/${id}`,
  };
  // return axios.request(requestConfig);
  const { data: response } = await axios.request<SingleData>(requestConfig);
  return response;
};

export const onAddUser = async (data: AddUser) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: `${BASE_URL}/users`,
    data,
  };
  const { data: response } = await axios.request<AddUserResponse>(
    requestConfig
  );
  return response;
};

export const onUpdateUser = async (data: IUpdateUser) => {
  const id = data.id;
  const requestConfig: AxiosRequestConfig = {
    method: "put",
    url: `${BASE_URL}/users/${id}`,
    data,
  };
  const { data: response } = await axios.request<UpdateResponse>(requestConfig);
  console.log(response,'dddd')
  return response;
};
