import React, { useEffect } from "react";
import { Button, Drawer, Form, FormInstance, Row } from "antd";
import { ITFDataTableUser } from "types/management.types";

interface ITFPropsDrawerUser {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
  title: string;
  dataEdit: ITFDataTableUser | undefined;
  form: FormInstance;
  handleSetFields: Function;
  displayContent: JSX.Element;
  onFinish: ((values: any) => void) | undefined;
  onFinishFailed: ((values: any) => void) | undefined;
}

const DrawerUser = (props: ITFPropsDrawerUser) => {
  const {
    isOpen,
    onClose,
    title,
    dataEdit,
    form,
    handleSetFields,
    displayContent,
    onFinish,
    onFinishFailed,
  } = props;

  useEffect(() => {
    if (dataEdit === undefined) {
      form.resetFields();
    } else {
      handleSetFields();
    }
  }, [dataEdit, form, handleSetFields]);

  return (
    <Drawer
      title={`${dataEdit === undefined ? "Add" : "Edit"} ${title}`}
      placement="right"
      size={"default"}
      onClose={onClose}
      open={isOpen}
      maskClosable={false}
      forceRender
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
      >
        {displayContent}
        <Row style={{ justifyContent: "flex-end", gap: "8px" }}>
          <Button onClick={onClose} danger>
            Cancel
          </Button>

          <Button type="primary" htmlType="submit">
            OK
          </Button>
        </Row>
      </Form>
    </Drawer>
  );
};

export default DrawerUser;