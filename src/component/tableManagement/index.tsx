import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { ITFDataTableUser } from "types/management.types";

interface ITFPropsTableManagement {
  columns: ColumnsType<ITFDataTableUser>;
  data: ITFDataTableUser[];
}
const TableManagement = (props: ITFPropsTableManagement) => {
  const { columns, data } = props;
  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
      />
    </>
  );
};

export default TableManagement;
