import { LOGOUFA } from "constants/index";
import { Header } from "antd/es/layout/layout";
import { Button, Row } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";

const HeaderCustomer = () => {
  const { t } = useTranslation();

  const showMenu = (label: string, path: string) => {
    return (
      <Link to={path}>
        <div className="titleHeader" style={{ color: "white" }}>
          {label}
        </div>
      </Link>
    );
  };
  return (
    <Container>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          boxShadow:
            "rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px",
        }}
      >
        <img src={LOGOUFA} alt="Logo" style={{ width: 150, height: 50 }} />
        <Row
          style={{
            width: "100%",
            justifyContent: "space-around",
          }}
        >
          {showMenu(t("Home Page"), "")}
          {showMenu(t("Random Reward"), "random-reward")}
          {showMenu(t("Claim Reward"), "claim-reward")}
        </Row>
        <Button danger>{t("Log Out")}</Button>
      </Header>
    </Container>
  );
};
export default HeaderCustomer;
