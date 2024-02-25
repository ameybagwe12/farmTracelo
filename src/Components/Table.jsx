import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#416D19",
    color: theme.palette.common.white,
    fontSize: 25,
    fontFamily: "Pixelify Sans",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 25,
    fontFamily: "Pixelify Sans",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#AC7D88",
  },
  "&:nth-of-type(even)": {
    backgroundColor: "#85586F",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// Modify createData to handle trackData
function createData(trackData) {
  return {
    name: trackData.name,
    price: trackData.price,
    bought_weight: trackData.bought_weight,
    prod_id: trackData.prod_id,
    prev: trackData.prev,
  };
}

export default function CustomizedTables({ trackData }) {
  console.log("My Track Data ", trackData);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Distribution</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Weight Bought</StyledTableCell>
            <StyledTableCell align="right">TimeStamp</StyledTableCell>
            <StyledTableCell align="right">Product Id</StyledTableCell>
            <StyledTableCell align="right">Previous Hash</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {trackData.map((data) => (
            <StyledTableRow key={data.prod_id}>
              <StyledTableCell component="th" scope="row">
                {data.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {Number(data.price)}
              </StyledTableCell>
              <StyledTableCell align="right">
                {Number(data.bought_weight)}
              </StyledTableCell>
              <StyledTableCell align="right">{data.date}</StyledTableCell>
              <StyledTableCell align="right">{data.prod_id}</StyledTableCell>
              <StyledTableCell align="right">
                {data.prev !== "" ? data.prev : "-"}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
