import { Cookies } from "react-cookie";
const cookies = new Cookies();
export const removeCookie = (name: string) => {
  try {
    cookies.remove(name);
  } catch (error) {}
};
