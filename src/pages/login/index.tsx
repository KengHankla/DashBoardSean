import { useCookies } from "react-cookie";
import { Container } from "./styles";
import { Input, Form, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { setLoading } from "store/slice/common";
import { ALERT_REQUIRE_FIELD } from "constants/word";
interface ITFOnfinishLogin {
  username: string;
  password: string;
  remember: boolean;
}

const LoginPage = () => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [, setCookie] = useCookies(["token", "selectedTabs"]);

  const onFinish = (values: ITFOnfinishLogin) => {
    history.push("home");
    setCookie("selectedTabs", "home", { path: "/" });
    dispatch(setLoading(true));
    setTimeout(() => {
      try {
        setCookie("token", values.username, { path: "/" });
      } catch (error) {
      } finally {
        setTimeout(() => {
          dispatch(setLoading(false));
        }, 100);
      }
    }, 1000);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
          label="ชื่อผู้ใช้"
          name="username"
          rules={[
            { required: true, message: ALERT_REQUIRE_FIELD + "ชื่อผู้ใช้" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="รหัสผ่าน"
          name="password"
          rules={[
            { required: true, message: ALERT_REQUIRE_FIELD + "รหัสผ่าน" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            เข้าสู่ระบบ
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginPage;
