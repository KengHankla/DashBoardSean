/* eslint-disable jsx-a11y/anchor-is-valid */
import { LOGOUFA } from "constants/index";
import { Header } from "antd/es/layout/layout";
import { Avatar, Button, Col, Popover, Row } from "antd";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Container } from "./styles";
import { UserOutlined } from "@ant-design/icons";
import colorConstants from "constants/colorConstants";
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
  const content = (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <div>
        <a>View Profile</a>
      </div>
      <Button danger style={{ marginTop: "10px" }}>
        {t("Log Out")}
      </Button>
    </div>
  );
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

        <Col
          style={{
            color: colorConstants.BaseGray,
            width: "120px",
          }}
        >
          <div style={{ height: "20px" }}>Hankla Thosa</div>
          <div>100 point</div>
        </Col>
        <Popover placement="bottomRight" content={content} trigger="click">
          <Avatar
            style={{
              backgroundColor: colorConstants.Primary500,
              verticalAlign: "middle",
            }}
            size="large"
            gap={4}
            icon={<UserOutlined />}
          ></Avatar>
        </Popover>
      </Header>
    </Container>
  );
};
export default HeaderCustomer;
