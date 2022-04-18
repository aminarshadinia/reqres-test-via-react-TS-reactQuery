import { useQuery } from "react-query"
import { getUserList } from "../components/api/api"

export const useUserList = ({onSuccess}) => {
  const {mutate , isLoading , data} = useQuery("fetchUserList" , getUserList , {
    onSuccess : (variables) => {
      onSuccess(data, variables)
    }
  })
  return {mutate , isLoading , data}
}



