import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";

export default function BookingList(props) {
  const { booking, removeBooking } = props;
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const bookingList = booking
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((val, index) => (
      <TableRow key={val.id}>
        <TableCell className="text-left bg-white p-3">{index + 1}</TableCell>
        <TableCell className="text-left bg-white p-3">
          {val.serialNumber}
        </TableCell>
        <TableCell className="text-left bg-white p-3">
          {val.data.name}
        </TableCell>
        <TableCell className="text-left bg-white p-3">
          {val.data.email}
        </TableCell>
        <TableCell className="text-left bg-white p-3">
          {val.data.number}
        </TableCell>
        <TableCell className="text-left bg-white p-3">
          {val.data.address}
        </TableCell>
        <TableCell
          onClick={() => removeBooking(val.id)}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <DeleteIcon />
        </TableCell>
      </TableRow>
    ));

  return (
    <div className="details px-8 h-screen bg-gray-100">
      <TableContainer className="w-full">
        <Table >
          <TableHead>
            <TableRow className="bg-gray-200 border-b-2 border-gray-200">
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Serial No.</TableCell>
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Order No.</TableCell>
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Service Type</TableCell>
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Name</TableCell>
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Date</TableCell>
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Number</TableCell>
              <TableCell className="p-3 text-sm font-semibold tracking-wide text-left w-1/7">Delete Data</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{bookingList}</TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={booking.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
