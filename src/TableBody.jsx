import React from "react";
import _ from "lodash";

const TableBody = ({ items, columns }) => {
  return items.map((item) => {
    return (
      <tr key={item._id}>
        {columns.map((col) => (
          <td key={item._id + col.path}>
            {col.content ? col.content(item) : _.get(item, col.path)}
          </td>
        ))}
      </tr>
    );
  });
};

export default TableBody;
