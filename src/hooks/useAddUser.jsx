import { useMutation } from "react-query"
import { onAddUser } from "../components/api/api"

export const useAddUser = ({onSuccess,onError}) => {
  const {mutate , isLoading} = useMutation("handleAddUser" ,onAddUser , {
    onSuccess : (data) => {
      onSuccess(data)
    },
    onError : (data) => {
      onError(data)
    },
  })
  return {mutate , isLoading}
}