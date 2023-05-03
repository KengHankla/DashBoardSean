import { Button, Row } from "antd";
interface ITFHeaderManagement {
  title: string;
  onClickButtonAddNew: (e: React.MouseEvent | React.KeyboardEvent) => void;
}

const HeaderManagement = (props: ITFHeaderManagement) => {
  const { title, onClickButtonAddNew } = props;
  return (
    <Row
      style={{
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <h1>{title} Management</h1>
      <Button type="primary" onClick={onClickButtonAddNew}>
        Add New {title}
      </Button>
    </Row>
  );
};

export default HeaderManagement;
