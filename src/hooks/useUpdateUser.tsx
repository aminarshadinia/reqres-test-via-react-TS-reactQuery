import { useMutation } from "react-query";
import { onUpdateUser } from "../components/api/api";
import { HookType, UpdateUser } from "../components/interfaces/interfaces";

export const useUpdateUser: HookType = ({ onSuccess, onError }) => {
  const { mutate, isLoading } = useMutation("handleUpdateUser", onUpdateUser, {
    onSuccess: (data: UpdateUser) => {
      onSuccess(data);
    },
    onError: (data: string) => {
      onError(data);
    },
  });
  return { mutate, isLoading };
};
