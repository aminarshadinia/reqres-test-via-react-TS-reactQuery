import { BASE_URL } from "../../env"
import axios, { AxiosRequestConfig } from "axios";
import { AddUser, Credentials } from "../interfaces/interfaces";


export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
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
  const response = await axios.request(requestConfig);
  return response;
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
