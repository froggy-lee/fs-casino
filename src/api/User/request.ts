import { authRequest } from "../axios";
import { LocalStorage } from "@/utils/localStorage";

export const getMeRequest = async () => {
  const userID = LocalStorage.get("userId");
  if (userID) {
    const res = await authRequest({
      url: `/api/v1/users/info?id=${userID}`,
      method: "GET",
    });
    return res;
  }
};
