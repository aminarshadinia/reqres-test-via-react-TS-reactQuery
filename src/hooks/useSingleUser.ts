import { useQuery } from "react-query";
import { getSingleUser } from "../components/api/api";

export const useSingleUser = (id: number) => {
  const { data, status } = useQuery(
    ["fetchSingleUser", id],
    () => getSingleUser(id)
  );
  return { data, status };
};
