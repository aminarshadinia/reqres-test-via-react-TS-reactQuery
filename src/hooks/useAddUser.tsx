import {  useMutation } from "react-query";
import { onAddUser } from "../components/api/api";
import {  AddUserResponse, HookType } from "../components/interfaces/interfaces";

export const useAddUser: HookType = ({ onSuccess, onError }) => {
  const { mutate, isLoading } = useMutation("handleAddUser", onAddUser, {
    onSuccess: (data: AddUserResponse) => {
      onSuccess(data);
    },
    onError: (data: string) => {
      onError(data);
    },
  });
  return { mutate, isLoading };
};
