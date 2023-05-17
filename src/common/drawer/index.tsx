import React, { useEffect } from "react";
import { Button, Drawer, Form, FormInstance, Row } from "antd";
import {
  ITFDataTableUser,
  ITFDataTableRandomReward,
} from "types/management.types";

interface ITFPropsDrawerUser {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
  title: string;
  dataEdit: ITFDataTableUser | ITFDataTableRandomReward | undefined;
  form: FormInstance;
  handleSetFields: Function;
  displayContent: JSX.Element;
  onFinish: ((values: any) => void) | undefined;
  onFinishFailed: ((values: any) => void) | undefined;
}

const DrawerCommon = (props: ITFPropsDrawerUser) => {
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
      title={`${dataEdit === undefined ? "เพิ่ม" : "แก้ไข"} ${title}`}
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
            ยกเลิก
          </Button>

          <Button type="primary" htmlType="submit">
            ยืนยัน
          </Button>
        </Row>
      </Form>
    </Drawer>
  );
};

export default DrawerCommon;
