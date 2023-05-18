import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Button } from "antd";
import { Container } from "./styles";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

interface ITFProps {
  collapsed: boolean;
  setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  hiddenExpandSider: boolean;
}
const HeaderLayout = (props: ITFProps) => {
  const { t } = useTranslation();
  const { collapsed, setCollapsed, hiddenExpandSider } = props;
  const [, , removeCookie] = useCookies(["token"]);

  const onClickLogOut = async () => {
    removeCookie("token");
  };

  return (
    <Header
      style={{
        padding: 0,
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
      }}
    >
      <Container>
        {hiddenExpandSider ? (
          <div></div>
        ) : (
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
              display: hiddenExpandSider ? "none" : "",
            }}
          />
        )}

        <Button danger onClick={onClickLogOut}>
          {t("Log Out")}
        </Button>
      </Container>
    </Header>
  );
};

export default HeaderLayout;
