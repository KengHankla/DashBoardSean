import { ITFDataTableUser } from "types/management.types";
import { useCallback, useState } from "react";
import { FormInstance } from "antd";
import { useTranslation } from "react-i18next";
import { getUserInfo, putUserInfo } from "api/user/user";

export const useUserManagement = (form: FormInstance) => {
  const { t } = useTranslation();

  const title = t("User");
  const [isOperDrawer, setIsOperDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ITFDataTableUser | undefined>(
    undefined
  );
  const [dataUserManagement, setDataUserManagement] = useState<
    ITFDataTableUser[]
  >([]);

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
      userId: dataEdit?.userId,
      password: dataEdit?.password,
      address: dataEdit?.address,
      lineId: dataEdit?.lineId,
      phoneNumber: dataEdit?.phoneNumber,
      phoneNumberSecond: dataEdit?.phoneNumberSecond,
      source: dataEdit?.source,
      totalPoint: dataEdit?.totalPoint,
      totalDeposit: dataEdit?.totalDeposit,
      totalBonus: dataEdit?.totalBonus,
      totalWithdraw: dataEdit?.totalWithdraw,
      depositAmount: dataEdit?.depositAmount,
      bonusAmount: dataEdit?.bonusAmount,
      withDrawAmount: dataEdit?.withDrawAmount,
    });
  };

  const onFinishUser = async (value: ITFDataTableUser) => {
    try {
      const response = await putUserInfo(value);
      console.log(response);
    } catch (error) {
    } finally {
    }
  };

  const onFinishFailedUser = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const getDataUserInfo = useCallback(async () => {
    try {
      const response = await getUserInfo();
      setDataUserManagement(response.data);
    } catch (error) {
    } finally {
    }
  }, []);

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
    getDataUserInfo,
  };
};
