import { useMutation } from "react-query";
import { onUpdateUser } from "../components/api/api";
import { MutationType, UpdateResponse } from "../components/interfaces/interfaces";

export const useUpdateUser = ({
  onSuccess,
  onError,
}: MutationType<UpdateResponse>) => {
  const { mutate, isLoading } = useMutation(onUpdateUser, {
    onSuccess: (data) => {
      onSuccess(data);
    },
    onError: (error: string) => {
      onError(error);
    },
  });
  return { mutate, isLoading };
};
