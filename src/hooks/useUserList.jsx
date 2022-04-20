import { useQuery } from "react-query"
import { getUserList } from "../components/api/api"

export const useUserList = ({onSuccess}) => {
  const {mutate , isLoading } = useQuery("fetchUserList" , getUserList , {
    onSuccess : (data) => {
      onSuccess(data)
    }
  })
  return {mutate , isLoading }
}



