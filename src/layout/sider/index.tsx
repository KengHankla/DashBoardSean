import { GiftOutlined, HomeOutlined, LaptopOutlined } from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useHistory } from "react-router-dom";

const { Sider } = Layout;

interface propsITF {
  collapsed: boolean;
}

const SiderLayout = (props: propsITF) => {
  const { collapsed } = props;
  const history = useHistory();

  const onClickMenu = (e: any) => {
    history.push(e.key);
  };

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
        items={[
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
        ]}
      />
    </Sider>
  );
};

export default SiderLayout;
