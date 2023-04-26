import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { Container } from "./styles";
import { useCookies } from "react-cookie";
const { Header } = Layout;

interface ITFProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}
const HeaderLayout = (props: ITFProps) => {
  const { collapsed, setCollapsed } = props;
  const [, , removeCookie] = useCookies(["token"]);

  const onClickLogOut = async () => {
    removeCookie("token");
  };
  return (
    <Header style={{ padding: 0 }}>
      <Container>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: "16px",
            width: 64,
            height: 64,
          }}
        />
        <Button danger onClick={onClickLogOut}>
          Log Out
        </Button>
      </Container>
    </Header>
  );
};

export default HeaderLayout;
