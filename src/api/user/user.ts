import { ITFDataTableUser } from "types/management.types";
import { httpClient } from "utils/HttpClient";

export const getUserInfo = async () => {
  return await httpClient.get("/GetUserInfo");
};

export const getUserInfoByUserId = async (userId: string) => {
  return await httpClient.get("/GetUserInfo", { params: { userId: userId } });
};

export const putUserInfo = async (data: ITFDataTableUser) => {
  return await httpClient.put("/UpdateUserInfo", data);
};
