import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

export default function OrderList(props) {
  const { order, removeOrder } = props;

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const orderList = order
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((val, index) => (
      <TableRow key={index}>
        <TableCell>{index + 1}</TableCell>
        <TableCell>{val.serialNumber}</TableCell>
        <TableCell>{val.data.name}</TableCell>
        <TableCell>{val.data.email}</TableCell>
        <TableCell>{val.data.number}</TableCell>
        <TableCell>{val.data.address}</TableCell>
        <TableCell onClick={() => removeOrder(val.id)}>
          <DeleteIcon />
        </TableCell>
      </TableRow>
    ));

  return (
    <div>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Serial No.</TableCell>
              <TableCell>Order No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Service Type</TableCell>
              <TableCell>Number</TableCell>
              <TableCell>Address</TableCell>
              <TableCell>Delete Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{orderList}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={order.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
