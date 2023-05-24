import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  ITFDataTableUser,
  ITFDataTableRandomReward,
} from "types/management.types";

interface ITFPropsTableManagement {
  columns: ColumnsType<ITFDataTableUser | ITFDataTableRandomReward | any>;
  data: ITFDataTableUser[] | ITFDataTableRandomReward[];
  summryTable?: (data: readonly any[]) => React.ReactNode;
}

const TableManagement = (props: ITFPropsTableManagement) => {
  const {
    columns,
    data,
    summryTable = () => {
      return <></>;
    },
  } = props;

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        scroll={{ x: 1500 }}
        pagination={{
          showSizeChanger: true,
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} items`,
        }}
        summary={(pageData) => summryTable(pageData)}
      />
    </>
  );
};

export default TableManagement;
