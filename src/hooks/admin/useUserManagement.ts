import { ITFDataTableUser, ITFOnFinishUser } from "types/management.types";
import { useState } from "react";
import { FormInstance } from "antd";
import { useTranslation } from "react-i18next";

export const useUserManagement = (form: FormInstance) => {
  const { t } = useTranslation();

  const title = t("User");
  const [isOperDrawer, setIsOperDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ITFDataTableUser | undefined>(
    undefined
  );

  const dataUserManagement: ITFDataTableUser[] = [
    {
      key: "1",
      firstName: "John",
      lastName: "Brown",
    },
  ];

  const onOpenDrawer = () => {
    setIsOperDrawer(true);
  };

  const onCloseDrawer = () => {
    setIsOperDrawer(false);
    setDataEdit(undefined);
  };

  const onClickEdit = (record: ITFDataTableUser) => {
    setIsOperDrawer(true);
    setDataEdit(record);
  };

  const handleSetFieldsEditUser = () => {
    form.setFieldsValue({
      firstName: dataEdit?.firstName,
      lastName: dataEdit?.lastName,
    });
  };

  const onFinishUser = (value: ITFOnFinishUser) => {
    console.log(value);
  };

  const onFinishFailedUser = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return {
    title,
    dataUserManagement,
    isOperDrawer,
    onOpenDrawer,
    onCloseDrawer,
    onClickEdit,
    dataEdit,
    handleSetFieldsEditUser,
    onFinishUser,
    onFinishFailedUser,
  };
};
