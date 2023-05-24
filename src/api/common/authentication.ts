import { httpClient } from "utils/HttpClient";
import { Cookies } from "react-cookie";
import { ITFPostLogin } from "types/authencation.types";
const cookies = new Cookies();

export const postLogin = async (data: ITFPostLogin) => {
  return await httpClient.post("/Login", data);
};
export const logout = () => {
  try {
    cookies.remove("accessToken");
    cookies.remove("selectedTabs");
    window.location.href = "login-admin";
    return;
  } catch (error) {
    window.location.href = "login-admin";
  }
};
