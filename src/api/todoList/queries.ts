import { useQuery } from "@tanstack/react-query";
import { getTodoListRequest } from "./request";

export const useGetTodoList = (page: Number, limit: Number, option?: any) => {
  return useQuery(
    ["getTodoList", page, limit],
    () => getTodoListRequest(page, limit),
    option
  );
};

// export const useGetTodoList = (page: Number, limit: Number, option?: any) => {
//   return useQuery({
//     queryKey: ["getTodoList", page, limit],
//     queryFn: () => getTodoListRequest(page, limit),
//   });
// };
