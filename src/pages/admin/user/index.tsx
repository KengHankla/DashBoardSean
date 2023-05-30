import DrawerUser from "common/drawer";
import TableManagement from "component/tableManagement";
import HeaderManagement from "component/headerManagement";
import { useUserManagement } from "hooks/admin/useUserManagement";
import { EditOutlined } from "@ant-design/icons";
import { ITFDataTableUser } from "types/management.types";
import type { ColumnsType } from "antd/es/table";
import { useDisplayDrawer } from "./displayDrawer";
import { Form } from "antd";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const UserPage = () => {
  const [formUserManagement] = Form.useForm();
  const { t } = useTranslation();
  const {
    title,
    dataUserManagement,
    isOperDrawer,
    onOpenDrawer,
    onCloseDrawer,
    dataEdit,
    handleSetFieldsEditUser,
    onFinishUser,
    onFinishFailedUser,
    onClickEdit,
    getDataUserInfo,
  } = useUserManagement(formUserManagement);
  const { displayContentDrawerUser } = useDisplayDrawer();

  const sorterString = (a: string = "", b: string = "") => {
    return a?.localeCompare(b);
  };

  const sorterNumber = (a: number = 0, b: any = 0) => a - b;

  const columns: ColumnsType<ITFDataTableUser> = [
    {
      title: `${t("First name")} - ${t("Last name")}`,
      key: "name",
      render: (record: ITFDataTableUser) => {
        return (
          <div>
            {record.firstName} {record.lastName}
          </div>
        );
      },
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.firstName, b.firstName),
      width: 200,
      ellipsis: true,
    },
    {
      title: t("Username"),
      key: "userId",
      dataIndex: "userId",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.userId, b.userId),
      width: 150,
    },

    {
      title: t("Password"),
      key: "password",
      dataIndex: "password",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.password, b.password),
      width: 150,
    },
    {
      title: t("Address"),
      key: "address",
      dataIndex: "address",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.address, b.address),
      ellipsis: true,
      width: 200,
    },
    {
      title: t("Line ID"),
      key: "lineId",
      dataIndex: "lineId",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.lineId, b.lineId),
      width: 150,
    },
    {
      title: t("Phone Number"),
      key: "phoneNumber",
      dataIndex: "phoneNumber",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.phoneNumber, b.phoneNumber),
      width: 150,
    },
    {
      title: t("Phone Number Second"),
      key: "phoneNumberSecond",
      dataIndex: "phoneNumberSecond",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.phoneNumberSecond, b.phoneNumberSecond),
      width: 150,
    },
    {
      title: t("Source"),
      key: "source",
      dataIndex: "source",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterString(a.source, b.source),
      width: 150,
    },
    {
      title: t("Total Point"),
      key: "totalPoint",
      dataIndex: "totalPoint",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.totalPoint, b.totalPoint),
      width: 100,
    },
    {
      title: t("Total Deposit"),
      key: "totalDeposit",
      dataIndex: "totalDeposit",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.totalDeposit, b.totalDeposit),
      width: 100,
    },
    {
      title: t("Total Bonus"),
      key: "totalBonus",
      dataIndex: "totalBonus",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.totalBonus, b.totalBonus),
      width: 100,
    },
    {
      title: t("Total Withdraw"),
      key: "totalWithdraw",
      dataIndex: "totalWithdraw",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.totalWithdraw, b.totalWithdraw),
      width: 100,
    },
    {
      title: t("Deposit Amount"),
      key: "depositAmount",
      dataIndex: "depositAmount",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.depositAmount, b.depositAmount),
      width: 100,
    },
    {
      title: t("Bonus Amount"),
      key: "bonusAmount",
      dataIndex: "bonusAmount",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.bonusAmount, b.bonusAmount),
      width: 100,
    },
    {
      title: t("Withdraw Amount"),
      key: "withDrawAmount",
      dataIndex: "withDrawAmount",
      sorter: (a: ITFDataTableUser, b: ITFDataTableUser) =>
        sorterNumber(a.withDrawAmount, b.withDrawAmount),
      width: 100,
    },
    {
      title: t("Action"),
      key: "action",
      align: "center",
      render: (record: ITFDataTableUser) => {
        return (
          <div>
            <EditOutlined
              style={{ cursor: "pointer" }}
              onClick={() => onClickEdit(record)}
            />
          </div>
        );
      },
      width: 100,
      fixed: "right",
    },
  ];

  useEffect(() => {
    getDataUserInfo();
  }, [getDataUserInfo]);

  return (
    <>
      <HeaderManagement title={title} onClickButtonAddNew={onOpenDrawer} />

      <TableManagement columns={columns} data={dataUserManagement} />

      <DrawerUser
        onClose={onCloseDrawer}
        isOpen={isOperDrawer}
        title={title}
        dataEdit={dataEdit}
        form={formUserManagement}
        handleSetFields={handleSetFieldsEditUser}
        displayContent={displayContentDrawerUser()}
        onFinish={onFinishUser}
        onFinishFailed={onFinishFailedUser}
      />
    </>
  );
};

export default UserPage;
