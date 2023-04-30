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

const { Sider } = Layout;

interface propsITF {
  collapsed: boolean;
}

const SiderLayout = (props: propsITF) => {
  const { collapsed } = props;
  const history = useHistory();
  const [cookies] = useCookies(["token"]);

  const mockRole = cookies.token;

  const onClickMenu = (e: any) => {
    history.push(e.key);
  };

  const menuCustomer = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "random-reward",
      icon: <LaptopOutlined />,
      label: "Random Reward",
    },
    {
      key: "claim-reward",
      icon: <GiftOutlined />,
      label: "Claim Reward",
    },
  ];

  const menuAdmin = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "user",
      icon: <UserOutlined />,
      label: "User",
    },
    {
      key: "staff",
      icon: <IdcardOutlined />,
      label: "Staff",
    },
    {
      key: "reward-random",
      icon: <LaptopOutlined />,
      label: "Reward Random",
    },
    {
      key: "reward",
      icon: <GiftOutlined />,
      label: "Reward",
    },
    {
      key: "data",
      icon: <DatabaseOutlined />,
      label: "Data",
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
        defaultSelectedKeys={["1"]}
        onClick={onClickMenu}
        items={mockRole === "admin" ? menuAdmin : menuCustomer}
      />
    </Sider>
  );
};

export default SiderLayout;
