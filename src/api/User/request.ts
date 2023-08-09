import { authRequest } from "../axios";
import { LocalStorage } from "@/utils/localStorage";

export const getMeRequest = async () => {
  const username = LocalStorage.get("username");
  if (username) {
    const res = await authRequest({
      url: `/api/v1/users/info?username=${username}`,
      method: "GET",
    });
    return res;
  }
};
