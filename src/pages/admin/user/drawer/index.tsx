/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Button, Col, Drawer, Form, Input, Row } from "antd";
import { ITFDataTableUser } from "types/management.types";

interface ITFPropsDrawerUser {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
  title: string;
  dataEdit: ITFDataTableUser | undefined;
}

interface ITFOnFinishUser {
  firstName: string;
  lastName: string;
}

const DrawerUser = (props: ITFPropsDrawerUser) => {
  const { isOpen, onClose, title, dataEdit } = props;
  const [form] = Form.useForm();

  const onFinish = (value: ITFOnFinishUser) => {
    console.log(value);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    if (dataEdit === undefined) {
      form.resetFields();
    } else {
      form.setFieldsValue({
        firstName: dataEdit.name,
        lastName: dataEdit.key,
      });
    }
  }, [dataEdit]);

  return (
    <Drawer
      title={`${dataEdit === undefined ? "Add" : "Edit"} ${title}`}
      placement="right"
      size={"default"}
      onClose={onClose}
      open={isOpen}
      maskClosable={false}
      // destroyOnClose
    >
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        preserve={false}
      >
        <Row gutter={10}>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label="First name"
              name="firstName"
              rules={[{ required: true, message: "Please enter first name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={24} md={24} lg={12} xl={12}>
            <Form.Item
              label="Last name"
              name="lastName"
              rules={[{ required: true, message: "Please enter last name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

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
