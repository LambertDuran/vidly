import React from "react";
import Table from "react-bootstrap/Table";
import MovieHeader from "./MovieHeader";
import MovieBody from "./MovieBody";

const TableComponent = ({ items, onSort, sortColumn, sortColumns }) => {
  return (
    items.length !== 0 && (
      <Table className="table-light">
        <thead>
          <tr>
            <MovieHeader
              onSort={onSort}
              sortColumn={sortColumn}
              sortColumns={sortColumns}
            />
          </tr>
        </thead>
        <tbody>
          <MovieBody items={items} columns={sortColumns} />
        </tbody>
      </Table>
    )
  );
};

export default TableComponent;
