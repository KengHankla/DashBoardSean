import { LOGOUFA } from "constants/index";
import { Header } from "antd/es/layout/layout";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderCustomer = () => {
  const { t } = useTranslation();

  const showMenu = (label: string, path: string) => {
    return (
      <Link to={path}>
        <div style={{ color: "white" }}>{label}</div>
      </Link>
    );
  };
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <img src={LOGOUFA} alt="Logo" style={{ width: 150, height: 50 }} />
      <Row
        style={{
          background: "green",
          width: "100%",
          justifyContent: "space-around",
        }}
      >
        {showMenu(t("Home Page"), "")}
        {showMenu(t("Random Reward"), "random-reward")}
        {showMenu(t("Claim Reward"), "claim-reward")}
      </Row>
      <Button danger>{t("Log out")}</Button>
    </Header>
  );
};
export default HeaderCustomer;
