import { useQuery } from "react-query";
import { getTodoListRequest } from "./request";

export const useGetTodoList = (page: Number, limit: Number, option?: any) => {
  return useQuery(
    ["getTodoList", page, limit],
    () => getTodoListRequest(page, limit),
    option
  );
};
