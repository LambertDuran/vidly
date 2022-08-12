import React from "react";
import Table from "react-bootstrap/Table";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const TableComponent = ({ items, onSort, sortColumn, sortColumns }) => {
  return (
    items.length !== 0 && (
      <Table className="table-light">
        <thead>
          <tr>
            <TableHeader
              onSort={onSort}
              sortColumn={sortColumn}
              sortColumns={sortColumns}
            />
          </tr>
        </thead>
        <tbody>
          <TableBody items={items} columns={sortColumns} />
        </tbody>
      </Table>
    )
  );
};

export default TableComponent;
