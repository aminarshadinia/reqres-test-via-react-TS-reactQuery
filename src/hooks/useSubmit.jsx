import { useMutation } from "react-query"
import { onLogin } from "../components/api/api"

export const useSubmit = ({onSuccess}) => {
  const {mutate , isLoading , data} = useMutation("handleLogin" ,onLogin , {
    onSuccess : (variables) => {
     
      onSuccess(variables)
    },
  })
  return {mutate , isLoading , data}
}