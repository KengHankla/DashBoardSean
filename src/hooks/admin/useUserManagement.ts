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
      userName: "JOHNBOWN",
      password: "1234",
      address: "2025 M Street, Northwest, Washington, DC, 20036.",
      lineID: "johnbown1",
      phoneNumber: "089-23485441",
      phoneNumberSecond: "088-457831",
      source: "S.auy",
      totalPoint: 50,
      totalDeposit: 900.88,
      totalBonus: 0,
      totalWithdraw: 1578,
      depositAmount: 2,
      bonusAmount: 0,
      withdrawAmount: 2,
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
      userName: dataEdit?.userName,
      password: dataEdit?.password,
      address: dataEdit?.address,
      lineID: dataEdit?.lineID,
      phoneNumber: dataEdit?.phoneNumber,
      phoneNumberSecond: dataEdit?.phoneNumberSecond,
      source: dataEdit?.source,
      totalPoint: dataEdit?.totalPoint,
      totalDeposit: dataEdit?.totalDeposit,
      totalBonus: dataEdit?.totalBonus,
      totalWithdraw: dataEdit?.totalWithdraw,
      depositAmount: dataEdit?.depositAmount,
      bonusAmount: dataEdit?.bonusAmount,
      withdrawAmount: dataEdit?.withdrawAmount,
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
