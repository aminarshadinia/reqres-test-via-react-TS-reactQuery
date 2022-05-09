import { useQuery } from "react-query";
import { getUserList } from "../components/api/api";

export const useUserList = () => {
 return useQuery("fetchUserList", getUserList);
};
