import { httpClient } from "utils/HttpClient";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

export const getData = async () => {
  return await httpClient.get("/data");
};
export const logout = () => {
  cookies.remove("token");
  cookies.remove("selectedTabs");
};
