import { useMutation } from "react-query";
import { onLogin } from "../components/api/api";
import { HookType, LoginData } from "../components/interfaces/interfaces";

export const useSubmit: HookType = ({ onSuccess, onError }) => {
  const { mutate, isLoading } = useMutation("handleLogin", onLogin, {
    onSuccess: (data: LoginData) => {
      onSuccess(data);
    },
    onError: (data: string) => {
      onError(data);
    },
  });
  return { mutate, isLoading };
};
