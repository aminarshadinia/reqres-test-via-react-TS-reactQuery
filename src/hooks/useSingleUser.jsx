import { useQuery } from "react-query"
import { getSingleUser } from "../components/api/api"

export const useSingleUser = ({onSuccess}) => {
  const {mutate , isLoading } = useQuery("fetchSingleUser" , getSingleUser , {
    onSuccess : (data) => {
      onSuccess(data)
    }
  })
  return {mutate , isLoading}
}



