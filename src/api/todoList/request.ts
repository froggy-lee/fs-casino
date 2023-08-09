import { TestRequset } from "../axios";
import { IListTodo } from "./types";

export const getTodoListRequest = async (page: Number, limit: Number) => {
  const res: IListTodo = await TestRequset({
    url: `/todos?_page=${page}&_limit=${limit}`,
    method: "GET",
  });
  return res;
};
