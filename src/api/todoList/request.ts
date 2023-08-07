import { SSRRequest } from "../axios";
import { IListTodo } from "./types";

export const getTodoListRequest = async (page: Number, limit: Number) => {
  const res: IListTodo = await SSRRequest({
    url: `/todos?_page=${page}&_limit=${limit}`,
    method: "GET",
  });
  return res;
};
