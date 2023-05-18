import { Button, Row } from "antd";
import { useTranslation } from "react-i18next";

interface ITFHeaderManagement {
  title: string;
  onClickButtonAddNew: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const HeaderManagement = (props: ITFHeaderManagement) => {
  const { t } = useTranslation();
  const { title, onClickButtonAddNew } = props;
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{title}</h1>
      <Button type="primary" onClick={onClickButtonAddNew}>
        {t("Add")} {title}
      </Button>
    </Row>
  );
};

export default HeaderManagement;
