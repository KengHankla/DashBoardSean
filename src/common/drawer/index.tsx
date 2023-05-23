import React, { useEffect } from "react";
import { Button, Drawer, Form, FormInstance, Row } from "antd";
import {
  ITFDataTableUser,
  ITFDataTableRandomReward,
} from "types/management.types";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
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
      title={`${dataEdit === undefined ? t("Add") : t("Edit")} ${title}`}
      placement="right"
      size={"default"}
      onClose={onClose}
      open={isOpen}
      maskClosable={false}
      forceRender
      width={500}
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
            {t("Cancel")}
          </Button>

          <Button type="primary" htmlType="submit">
            {t("Submit")}
          </Button>
        </Row>
      </Form>
    </Drawer>
  );
};

export default DrawerCommon;
