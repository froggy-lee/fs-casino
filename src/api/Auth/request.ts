import { SSRRequest } from "../axios";

interface IUser {
  username: string;
  password: string;
}

export const loginRequest = async (data: IUser) => {
  const res = await SSRRequest({
    url: "/api/v1/login",
    method: "POST",
    data,
  });

  return res;
};
