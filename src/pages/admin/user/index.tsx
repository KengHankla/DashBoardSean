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
  } = useUserManagement(formUserManagement);
  const { displayContentDrawerUser } = useDisplayDrawer();

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
    },
    {
      title: t("Username"),
      key: "userName",
      dataIndex: "userName",
    },
    {
      title: t("Password"),
      key: "password",
      dataIndex: "password",
    },
    {
      title: t("Address"),
      key: "address",
      dataIndex: "address",
    },
    {
      title: t("Line ID"),
      key: "lineID",
      dataIndex: "lineID",
    },
    {
      title: t("Phone Number"),
      key: "phoneNumber",
      dataIndex: "phoneNumber",
    },
    {
      title: t("Phone Number Second"),
      key: "phoneNumberSecond",
      dataIndex: "phoneNumberSecond",
    },
    {
      title: t("Source"),
      key: "source",
      dataIndex: "source",
    },
    {
      title: t("Total Point"),
      key: "totalPoint",
      dataIndex: "totalPoint",
    },
    {
      title: t("Total Deposit"),
      key: "totalDeposit",
      dataIndex: "totalDeposit",
    },
    {
      title: t("Total Bonus"),
      key: "totalBonus",
      dataIndex: "totalBonus",
    },
    {
      title: t("Total Withdraw"),
      key: "totalWithdraw",
      dataIndex: "totalWithdraw",
    },
    {
      title: t("Deposit Amount"),
      key: "depositAmount",
      dataIndex: "depositAmount",
    },
    {
      title: t("Bonus Amount"),
      key: "bonusAmount",
      dataIndex: "bonusAmount",
    },
    {
      title: t("Withdraw Amount"),
      key: "withdrawAmount",
      dataIndex: "withdrawAmount",
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
    },
  ];

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
