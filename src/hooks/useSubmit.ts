import { useMutation } from "react-query";
import { onLogin } from "../components/api/api";
import { LoginData, MutationType } from "../components/interfaces/interfaces";

export const useSubmit = ({
  onSuccess,
  onError,
}: MutationType<LoginData>) => {
  const { mutate, isLoading } = useMutation(onLogin, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: string) => {
        onError(error);
      },
    });
  return { mutate, isLoading };
};