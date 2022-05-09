import { useMutation } from "react-query";
import { onAddUser } from "../components/api/api";
import {
  AddUserResponse,
  MutationType,
} from "../components/interfaces/interfaces";

export const useAddUser = ({
  onSuccess,
  onError,
}: MutationType<AddUserResponse>) => {
  const { mutate, isLoading } = useMutation(onAddUser, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error) => {
      onError(error);
    },
  });

  return { mutate, isLoading };
};
