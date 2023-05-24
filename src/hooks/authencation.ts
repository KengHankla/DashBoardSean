import { postLogin } from "api/common/authentication";
import { ITFPostLogin, ITFResponsePostLogin } from "types/authencation.types";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "store/store";
import { setLoading } from "store/slice/common";

export const useAuthencation = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [, setCookie, removeCookie] = useCookies([
    "accessToken",
    "selectedTabs",
    "refreshToken",
    "userInfo",
  ]);

  const postDataLogin = async (values: ITFPostLogin) => {
    dispatch(setLoading(true));
    try {
      const response = await postLogin({
        userId: values.userId,
        password: values.password,
        lang: values?.lang,
      });
      const responsePostLogin: ITFResponsePostLogin = response.data;
      history.push("home");
      setCookie("selectedTabs", "home", { path: "/" });
      setCookie("accessToken", responsePostLogin.accessToken, { path: "/" });
      setCookie("refreshToken", responsePostLogin.refreshToken, { path: "/" });
      setCookie("userInfo", jwtDecode(responsePostLogin.accessToken), {
        path: "/",
      });
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogOut = () => {
    history.push("/login-admin");
    removeCookie("selectedTabs");
    removeCookie("accessToken");
    removeCookie("refreshToken");
    removeCookie("userInfo");
  };

  return { postDataLogin, handleLogOut };
};
