import { useCookies } from "react-cookie";
import { Container } from "./styles";
import { Input, Form, Checkbox, Button } from "antd";
import { useHistory } from "react-router-dom";
import { useAppDispatch } from "store/store";
import { setLoading } from "store/slice/common";
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
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};

export default LoginPage;
