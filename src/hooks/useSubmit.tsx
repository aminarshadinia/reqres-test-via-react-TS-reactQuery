import { useMutation } from "react-query";
import { onLogin } from "../components/api/api";
import { LoginArgs, LoginData } from "../components/interfaces/interfaces";
// type Variables = { token: string };
// type Arrgs = ({
//   onSuccess,
//   onError,
// }: {
//   onSuccess: (variables: Variables) => void;
//   onError: (variables: string) => void;
// }) => {
//   mutate: UseMutateFunction<any, unknown, Credentials, unknown>;
//   isLoading: boolean;
//   data: any;
// };

export const useSubmit: LoginArgs = ({ onSuccess, onError }) => {
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
