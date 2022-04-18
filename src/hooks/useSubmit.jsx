import { useMutation } from "react-query"
import { onLogin } from "../components/api/api"

export const useSubmit = ({onSuccess,onError}) => {
  const {mutate , isLoading , data} = useMutation("handleLogin" ,onLogin , {
    onSuccess : (variables) => {
      onSuccess(variables)
    },
    onError : (variables) => {
      onError(variables)
    }
  })
  return {mutate , isLoading , data}
}