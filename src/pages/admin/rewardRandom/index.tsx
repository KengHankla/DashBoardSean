import { useRewardRandomManagement } from "hooks/admin/useRewardRandomManagement";
import HeaderManagement from "component/headerManagement";
import { Col, Form, Input } from "antd";
import TableManagement from "component/tableManagement";
import type { ColumnsType } from "antd/es/table";
import { ITFDataTableRandomReward } from "types/management.types";
import { EditOutlined } from "@ant-design/icons";
import DrawerCommon from "common/drawer";
import { Table } from "antd";
const RewardRandomPage = () => {
  const [formRewardRandomManagement] = Form.useForm();

  const {
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
  } = useRewardRandomManagement(formRewardRandomManagement);

  const columns: ColumnsType<ITFDataTableRandomReward> = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Percent",
      key: "percent",
      dataIndex: "percent",
    },
    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record: ITFDataTableRandomReward, __) => {
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
      <div>
        <Col>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item
            label="Percent"
            name="percent"
            rules={[{ required: true, message: "Please enter percent!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
      </div>
    );
  };

  const summaryRewardRandom = (
    pageData: readonly ITFDataTableRandomReward[]
  ) => {
    let totalPercent = 0;

    pageData.forEach(({ percent }) => {
      totalPercent += percent;
    });

    return (
      <>
        <Table.Summary.Row>
          <Table.Summary.Cell index={0}>Total</Table.Summary.Cell>
          <Table.Summary.Cell index={1}>
            <div>{totalPercent}</div>
          </Table.Summary.Cell>
        </Table.Summary.Row>
      </>
    );
  };

  return (
    <>
      <HeaderManagement title={title} onClickButtonAddNew={onOpenDrawer} />

      <TableManagement
        columns={columns}
        data={dataRandomRewardManagement}
        summryTable={summaryRewardRandom}
      />

      <DrawerCommon
        onClose={onCloseDrawer}
        isOpen={isOperDrawer}
        title={title}
        dataEdit={dataEdit}
        form={formRewardRandomManagement}
        handleSetFields={handleSetFieldsEditUser}
        displayContent={displayContentDrawerUser()}
        onFinish={onFinishUser}
        onFinishFailed={onFinishFailedUser}
      />
    </>
  );
};

export default RewardRandomPage;
