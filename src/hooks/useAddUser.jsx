import { useMutation } from "react-query"
import { onAddUser } from "../components/api/api"

export const useAddUser = ({onSuccess,onError}) => {
  const {mutate , data, isLoading} = useMutation("handleAddUser" ,onAddUser , {
    onSuccess : (variables) => {
      onSuccess(data, variables)
    },
    onError : (variables) => {
      onError(data,variables)
    },
  })
  return {mutate , data , isLoading}
}