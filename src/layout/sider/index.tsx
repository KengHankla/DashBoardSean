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
  const [cookies] = useCookies(["token", "selectedTabs"]);
  const [, setCookie] = useCookies(["selectedTabs"]);

  const mockRole = cookies.token;

  const onClickMenu = (e: any) => {
    setCookie("selectedTabs", e.key, { path: "/" });
    history.push(e.key);
  };

  const menuCustomer = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "หน้าหลัก",
    },
    {
      key: "random-reward",
      icon: <LaptopOutlined />,
      label: "สุ่มของรางวัล",
    },
    {
      key: "claim-reward",
      icon: <GiftOutlined />,
      label: "แลกของรางวัล",
    },
  ];

  const menuAdmin = [
    {
      key: "home",
      icon: <HomeOutlined />,
      label: "หน้าหลัก",
    },
    {
      key: "user",
      icon: <UserOutlined />,
      label: "จัดการผู้ใช้งาน",
    },
    {
      key: "staff",
      icon: <IdcardOutlined />,
      label: "จัดการผู้ดูแลระบบ",
    },
    {
      key: "reward-random",
      icon: <LaptopOutlined />,
      label: "จัดการสิ่งของในวงล้อ",
    },
    {
      key: "reward",
      icon: <GiftOutlined />,
      label: "จัดการของรางวัล",
    },
    {
      key: "data",
      icon: <DatabaseOutlined />,
      label: "นำเข้่าข้อมูล",
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
