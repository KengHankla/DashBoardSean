import { useState } from "react";
import DrawerUser from "./drawer";
import type { ColumnsType } from "antd/es/table";
import TableManagement from "component/tableManagement";
import { ITFDataTableUser } from "types/management.types";
import HeaderManagement from "component/headerManagement";

const UserPage = () => {
  const [isOperDrawer, setIsOperDrawer] = useState<boolean>(false);
  const title = "User";

  const columns: ColumnsType<ITFDataTableUser> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => {
        return <div>{text}</div>;
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
  };

  const onOpenDrawer = () => {
    setIsOperDrawer(true);
  };

  return (
    <>
      <HeaderManagement title={title} onClickButtonAddNew={onOpenDrawer} />

      <TableManagement columns={columns} data={data} />

      <DrawerUser onClose={onCloseDrawer} isOpen={isOperDrawer} title={title}/>
    </>
  );
};

export default UserPage;
