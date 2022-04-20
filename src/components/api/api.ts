import { BASE_URL } from "../../env";
import axios, { AxiosRequestConfig } from "axios";
import { AddUser, Credentials, UpdateUser } from "../interfaces/interfaces";

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig<Credentials> = {
    method: "post",
    url: `${BASE_URL}/login`,
    data,
  };
  const { data: response } = await axios.request(requestConfig);
  return response;
};

export const getUserList = async () => {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: `${BASE_URL}/users?page=2`,
  };
  return axios.request(requestConfig);
};

export const getSingleUser = async (id: number) => {
  const requestConfig: AxiosRequestConfig = {
    method: "get",
    url: `${BASE_URL}/users/${id}`,
  };
  return axios.request(requestConfig);
};

export const onAddUser = async (data: AddUser) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: `${BASE_URL}/users`,
    data,
  };
  const { data: response } = await axios.request(requestConfig);
  return response;
};

export const onUpdateUser = async (data: UpdateUser) => {
  const id = data.id;
  const requestConfig: AxiosRequestConfig = {
    method: "put",
    url: `${BASE_URL}/users/${id}`,
    data,
  };
  const { data: response } = await axios.request(requestConfig);
  return response;
};
