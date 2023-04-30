import React from "react";
import { Button, Drawer, Space } from "antd";

interface ITFPropsDrawerUser {
  onClose: (e: React.MouseEvent | React.KeyboardEvent) => void;
  isOpen: boolean;
}

const DrawerUser = (props: ITFPropsDrawerUser) => {
  const { isOpen, onClose } = props;

  return (
    <Drawer
      title={` Drawer`}
      placement="right"
      size={"default"}
      onClose={onClose}
      open={isOpen}
      extra={
        <Space>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={onClose}>
            OK
          </Button>
        </Space>
      }
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  );
};

export default DrawerUser;
