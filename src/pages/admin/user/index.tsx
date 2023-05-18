import DrawerUser from "common/drawer";
import type { ColumnsType } from "antd/es/table";
import TableManagement from "component/tableManagement";
import { ITFDataTableUser } from "types/management.types";
import HeaderManagement from "component/headerManagement";
import { EditOutlined } from "@ant-design/icons";
import { Col, Form, Input, Row } from "antd";
import { useUserManagement } from "hooks/admin/useUserManagement";
import { useTranslation } from "react-i18next";

const UserPage = () => {
  const { t } = useTranslation();
  const [formUserManagement] = Form.useForm();
  const {
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
  } = useUserManagement(formUserManagement);

  const columns: ColumnsType<ITFDataTableUser> = [
    {
      title: t("Firstname - Surname"),
      key: "name",
      render: (text: string, record: ITFDataTableUser, index: number) => {
        return (
          <div>
            {record.firstName} {record.lastName}
          </div>
        );
      },
    },
    {
      title: t("Action"),
      key: "action",
      align: "center",
      render: (text: string, record: ITFDataTableUser, index: number) => {
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

  const displayContentDrawerUser = () => {
    return (
      <Row gutter={10}>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Form.Item
            label={t("First name")}
            name="firstName"
            rules={[
              {
                required: true,
                message: t("Please enter") + t("First name"),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Form.Item
            label={t("Last name")}
            name="lastName"
            rules={[
              { required: true, message: t("Please enter") + t("Last name") },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
    );
  };

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
