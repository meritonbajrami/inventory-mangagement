import { Table } from "antd";

export default function CustomTable({
  header,
  tableClassName = "shadow-table rounded-tl-md rounded-tr-md",
  columns = [],
  data = [],
  pagination = false,
  onRowClick,
  scroll,
}) {
  return (
    <Table
      className={tableClassName}
      rowClassName={(index) => {
        return index % 2 === 0 ? "bg-alabaster" : "";
      }}
      columns={columns}
      dataSource={data}
      pagination={pagination}
      onRow={onRowClick}
      scroll={scroll}
      title={() => header}
    />
  );
}
