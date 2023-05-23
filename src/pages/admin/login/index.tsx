import { useAuthencation } from "hooks/authencation";
import { Container } from "./styles";
import { Input, Form, Button, Select } from "antd";
import { useTranslation } from "react-i18next";
import { ITFPostLogin } from "types/authencation.types";

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const { postDataLogin } = useAuthencation();

  const onFinish = async (values: ITFPostLogin) => {
    postDataLogin(values);
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
            {t("Log In")}
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginPage;
