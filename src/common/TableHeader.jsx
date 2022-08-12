import React from "react";

class TableHeader extends React.Component {
  onSortColumn = (selectedColumn) => {
    let { sortColumn } = this.props;
    if (sortColumn.path === selectedColumn.path)
      selectedColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else selectedColumn.order = "asc";
    this.props.onSort(selectedColumn);
  };

  renderSortIcon = (c) => {
    const { sortColumn } = this.props;
    return (
      c.path === sortColumn.path && (
        <i className={"fa fa-sort-" + sortColumn.order} aria-hidden="true"></i>
      )
    );
  };

  render() {
    return this.props.sortColumns.map((c) => (
      <th
        key={c.path}
        style={{ cursor: "pointer" }}
        onClick={() => this.onSortColumn({ path: c.path, order: c.order })}
      >
        {c.label}
        {this.renderSortIcon(c)}
      </th>
    ));
  }
}

export default TableHeader;
