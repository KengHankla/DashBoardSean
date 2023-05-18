import { LOGOUFA } from "constants/index";
import { Header } from "antd/es/layout/layout";

const HeaderCustomer = () => {
  return (
    <Header style={{ display: "flex", alignItems: "center" }}>
      <img src={LOGOUFA} alt="Logo" style={{ width: 150, height: 50 }} />
      <div style={{ color: "white" }}>1231232</div>
    </Header>
  );
};
export default HeaderCustomer;
