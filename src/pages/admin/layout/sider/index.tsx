import {
  GiftOutlined,
  HomeOutlined,
  LaptopOutlined,
  UserOutlined,
  DatabaseOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";

const { Sider } = Layout;

interface propsITF {
  collapsed: boolean;
}

const SiderLayout = (props: propsITF) => {
  const { t } = useTranslation();
  const { collapsed } = props;
  const history = useHistory();
  const [cookies] = useCookies(["accessToken", "selectedTabs"]);
  const [, setCookie] = useCookies(["selectedTabs"]);

  const mockRole = cookies.accessToken;

  const onClickMenu = (e: any) => {
    setCookie("selectedTabs", e.key, { path: "/" });
    history.push(e.key);
  };

  const menuCustomer = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: t("Home Page"),
    },
    {
      key: "random-reward",
      icon: <LaptopOutlined />,
      label: t("Random Reward"),
    },
    {
      key: "claim-reward",
      icon: <GiftOutlined />,
      label: t("Claim Reward"),
    },
  ];

  const menuAdmin = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: t("Home Page"),
    },
    {
      key: "user",
      icon: <UserOutlined />,
      label: t("User"),
    },
    {
      key: "admin",
      icon: <IdcardOutlined />,
      label: t("Admin"),
    },
    {
      key: "reward-random",
      icon: <LaptopOutlined />,
      label: t("Reward Random"),
    },
    {
      key: "reward",
      icon: <GiftOutlined />,
      label: t("Reward"),
    },
    {
      key: "data",
      icon: <DatabaseOutlined />,
      label: t("Import Data"),
    },
  ];

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={cookies.selectedTabs}
        onClick={onClickMenu}
        items={mockRole === "admin" ? menuAdmin : menuCustomer}
      />
    </Sider>
  );
};

export default SiderLayout;
