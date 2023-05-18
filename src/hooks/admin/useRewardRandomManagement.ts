import {
  ITFDataTableRandomReward,
  ITFOnFinishRandomReward,
} from "types/management.types";
import { FormInstance } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const useRewardRandomManagement = (form: FormInstance) => {
  const { t } = useTranslation();

  const title = t("Random Reward");
  const [isOperDrawer, setIsOperDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<
    ITFDataTableRandomReward | undefined
  >(undefined);

  const dataRandomRewardManagement: ITFDataTableRandomReward[] = [
    {
      key: "1",
      id: 1,
      name: "item 1",
      percent: 100,
    },
    {
      key: "2",
      id: 1,
      name: "item 2",
      percent: 20,
    },
  ];

  const onOpenDrawer = () => {
    setIsOperDrawer(true);
  };

  const onClickEdit = (record: ITFDataTableRandomReward) => {
    setIsOperDrawer(true);
    setDataEdit(record);
  };

  const onCloseDrawer = () => {
    setIsOperDrawer(false);
    setDataEdit(undefined);
  };

  const handleSetFieldsEditUser = () => {
    form.setFieldsValue({
      name: dataEdit?.name,
      percent: dataEdit?.percent,
    });
  };

  const onFinishUser = (value: ITFOnFinishRandomReward) => {
    console.log(value);
  };

  const onFinishFailedUser = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return {
    title,
    onOpenDrawer,
    onClickEdit,
    dataRandomRewardManagement,
    onCloseDrawer,
    isOperDrawer,
    dataEdit,
    handleSetFieldsEditUser,
    onFinishUser,
    onFinishFailedUser,
  };
};
