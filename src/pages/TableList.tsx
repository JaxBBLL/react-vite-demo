import { Table, TableColumnProps } from "@arco-design/web-react";

export default () => {
  const columns: TableColumnProps[] = [
    {
      title: "id",
      dataIndex: "id",
    },
    {
      title: "姓名",
      dataIndex: "name",
    },
    {
      title: "性别",
      dataIndex: "gender",
    },
  ];
  const data = [
    {
      name: "Jack",
      id: 1,
      gender: 1,
    },
    {
      name: "Peter",
      id: 2,
      gender: 1,
    },
  ];

  return <Table columns={columns} data={data} rowKey="id" />;
};
