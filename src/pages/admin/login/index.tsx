import { useCookies } from "react-cookie";
import { Container } from "./styles";
import { Input, Form, Button, Select } from "antd";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { setLoading } from "store/slice/common";
import { useTranslation } from "react-i18next";
import { postLogin } from "api/common/authentication";
import { ITFPostLogin, ITFResponsePostLogin } from "types/authencation.types";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [, setCookie] = useCookies([
    "accessToken",
    "selectedTabs",
    "refreshToken",
    "userInfo",
  ]);

  const { t, i18n } = useTranslation();

  const onFinish = async (values: ITFPostLogin) => {
    dispatch(setLoading(true));

    try {
      const response = await postLogin({
        username: values.username,
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

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeSelectTranslations = (e: string) => {
    i18n.changeLanguage(e);
  };

  return (
    <Container>
      <Form
        layout="vertical"
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ width: "20%" }}
      >
        <Form.Item
          label={t("Username")}
          name="username"
          rules={[
            { required: true, message: t("Please enter") + t("Username") },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={t("Password")}
          name="password"
          rules={[
            { required: true, message: t("Please enter") + t("Username") },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Select
          style={{ width: "100%", display: "none" }}
          onChange={onChangeSelectTranslations}
          options={[
            { value: "en", label: "english" },
            { value: "th", label: "thai" },
          ]}
        ></Select>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            {t("Login")}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginPage;
