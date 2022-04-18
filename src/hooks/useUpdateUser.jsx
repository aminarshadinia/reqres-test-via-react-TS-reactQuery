import { useMutation } from "react-query"
import { onUpdateUser } from "../components/api/api"

export const useUpdateUser = ({onSuccess,onError}) => {
  const {mutate , data, isLoading} = useMutation("handleUpdateUser" ,onUpdateUser , {
    onSuccess : (variables) => {
      onSuccess(data, variables)
    },
    onError : (variables) => {
      onError(data,variables)
    },
  })
  return {mutate , data , isLoading}
}