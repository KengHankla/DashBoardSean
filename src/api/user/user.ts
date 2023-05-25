import { httpClient } from "utils/HttpClient";

export const getUserInfo = async () => {
  return await httpClient.get("/GetUserInfo");
};
