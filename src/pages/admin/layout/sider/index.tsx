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
import { useCallback, useEffect, useState } from "react";
import { getUserInfoByUserId } from "api/user/user";
import { get } from "lodash";
import { TYPE_ROLE } from "../../../../constants/index";
import { setDataUser } from "store/slice/common";
import { ITFDataTableUser } from "types/management.types";
import { useAppDispatch } from "store/store";

const { Sider } = Layout;

interface propsITF {
  collapsed: boolean;
}

const SiderLayout = (props: propsITF) => {
  const { t } = useTranslation();
  const { collapsed } = props;
  const history = useHistory();
  const [cookies, setCookie] = useCookies(["selectedTabs", "userInfo"]);
  const [dataUserRole, setDataUserRole] = useState<string | undefined>(
    undefined
  );
  const dispatch = useAppDispatch();

  const onClickMenu = (e: any) => {
    setCookie("selectedTabs", e.key, { path: "/" });
    history.push(e.key);
  };

  const menuSuperAdmin = [
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

  const menuStaff = [
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
      key: "data",
      icon: <DatabaseOutlined />,
      label: t("Import Data"),
    },
  ];

  const getDataUserInfoByUserId = useCallback(async () => {
    try {
      const response = await getUserInfoByUserId(cookies.userInfo.nameid);
      const data: string = get(response, "data[0].role", undefined);
      const dataUs: ITFDataTableUser = get(response, "data[0]", undefined);
      setDataUserRole(data);
      dispatch(setDataUser(dataUs));
    } catch (error) {
    } finally {
    }
  }, [cookies.userInfo.nameid, dispatch]);

  useEffect(() => {
    getDataUserInfoByUserId();
  }, [getDataUserInfoByUserId]);

  const handleShowMenu = () => {
    if (dataUserRole === TYPE_ROLE.SUPER_ADMIN) {
      return menuSuperAdmin;
    } else if (dataUserRole === TYPE_ROLE.ADMIN) {
      return menuAdmin;
    }
    return menuStaff;
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
        selectedKeys={cookies.selectedTabs}
        onClick={onClickMenu}
        items={handleShowMenu()}
      />
    </Sider>
  );
};

export default SiderLayout;
