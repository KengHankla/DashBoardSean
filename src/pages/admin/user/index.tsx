import { useState } from "react";
import DrawerUser from "./drawer";
import type { ColumnsType } from "antd/es/table";
import TableManagement from "component/tableManagement";
import { ITFDataTableUser } from "types/management.types";
import HeaderManagement from "component/headerManagement";
import { EditOutlined } from "@ant-design/icons";

const UserPage = () => {
  const title = "User";
  const [isOperDrawer, setIsOperDrawer] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<ITFDataTableUser | undefined>(
    undefined
  );

  const onClickEdit = (record: ITFDataTableUser) => {
    setIsOperDrawer(true);
    setDataEdit(record);
  };

  const columns: ColumnsType<ITFDataTableUser> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <div>{text}</div>;
      },
    },
    {
      title: "Action",
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

  const data: ITFDataTableUser[] = [
    {
      key: "1",
      name: "John Brown",
    },
  ];

  const onCloseDrawer = () => {
    setIsOperDrawer(false);
    setDataEdit(undefined);
  };

  const onOpenDrawer = () => {
    setIsOperDrawer(true);
  };

  return (
    <>
      <HeaderManagement
        title={title}
        onClickButtonAddNew={onOpenDrawer}
      />

      <TableManagement columns={columns} data={data} />

      <DrawerUser
        onClose={onCloseDrawer}
        isOpen={isOperDrawer}
        title={title}
        dataEdit={dataEdit}
      />
    </>
  );
};

export default UserPage;
