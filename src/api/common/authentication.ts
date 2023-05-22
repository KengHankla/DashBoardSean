import { httpClient } from "utils/HttpClient";
import { Cookies } from "react-cookie";
import { ITFPostLogin } from "types/authencation.types";
const cookies = new Cookies();

export const postLogin = async (data: ITFPostLogin) => {
  return await httpClient.post("/Login", data);
};
export const logout = () => {
  cookies.remove("accessToken");
  cookies.remove("selectedTabs");
};
