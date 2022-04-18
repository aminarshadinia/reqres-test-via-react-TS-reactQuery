import { useQuery } from "react-query"
import { getSingleUser } from "../components/api/api"

export const useSingleUser = ({onSuccess}) => {
  const {mutate , isLoading , data} = useQuery("fetchSingleUser" , getSingleUser , {
    onSuccess : (variables) => {
      onSuccess(data, variables)
    }
  })
  return {mutate , isLoading , data}
}



