import { httpClient } from "utils/HttpClient";
import { Cookies } from "react-cookie";
import { ITFPostLogin } from "types/authencation.types";
import jwtDecode from "jwt-decode";
const cookies = new Cookies();

export const postLogin = async (data: ITFPostLogin) => {
  return await httpClient.post("/Login", data);
};

export const RefreshNewToken = async () => {
  const data = {
    refreshToken: cookies.get("refreshToken"),
  };

  try {
    const response = await httpClient.post("/RefreshToken", data);
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    cookies.set("accessToken", response.data.accessToken);
    cookies.set("refreshToken", response.data.refreshToken);
    cookies.set("userInfo", jwtDecode(response.data.accessToken));
    return response.data.accessToken;
  } catch (error: any) {
    console.log(error.response);
    logout();
  }
};

export const logout = async () => {
  const data = {
    token: cookies.get("accessToken"),
  };

  try {
    await httpClient.post("/RevokeToken", data);
  } catch (error) {
  } finally {
    cookies.remove("selectedTabs");
    cookies.remove("accessToken");
    cookies.remove("refreshToken");
    cookies.remove("userInfo");
    window.location.href = "login-admin";
  }
};
