// // import * as React from 'react';
// // import { Button } from '@mui/material';
// // import Table from '@mui/material/Table';
// // import TableBody from '@mui/material/TableBody';
// // import TableCell from '@mui/material/TableCell';
// // import TableContainer from '@mui/material/TableContainer';
// // import TableHead from '@mui/material/TableHead';
// // import TableRow from '@mui/material/TableRow';
// // import Paper from '@mui/material/Paper';
// // import { useNavigate } from "react-router-dom";

// // function createData(name, tot, ava, taken, remaining) {
// //   return { name, tot, ava, taken, remaining };
// // }

// // const rows = [
// //   createData('BasketBall', 15, 6, 2, 4),
// //   createData('FootBall', 23, 9, 3, 4),
// //   createData('Cricket Bat', 26, 16, 2, 6),
// //   createData('Cricket Ball', 35, 3, 6, 4),
// //   createData('VollyBall', 35, 16, 4, 3),
// // ];

// // export default function BasicTable() {
// //   const navigate = useNavigate();
// //   return (
// //     <>
    
// //     <TableContainer component={Paper}>
// //       <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //         <TableHead>
// //           <TableRow>
// //             <TableCell>Equipment Name</TableCell>
// //             <TableCell align="right">Total</TableCell>
// //             <TableCell align="right">Available</TableCell>
// //             <TableCell align="right">Taken</TableCell>
// //             <TableCell align="right">Remaining</TableCell>
// //           </TableRow>
// //         </TableHead>
// //         <TableBody>
// //           {rows.map((row) => (
// //             <TableRow
// //               key={row.name}
// //               sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
// //             >
// //               <TableCell component="th" scope="row">
// //                 {row.name}
// //               </TableCell>
// //               <TableCell align="right">{row.tot}</TableCell>
// //               <TableCell align="right">{row.ava}</TableCell>
// //               <TableCell align="right">{row.taken}</TableCell>
// //               <TableCell align="right">{row.remaining}</TableCell>
// //             </TableRow>
// //           ))}
// //         </TableBody>
// //       </Table>
// //     </TableContainer>
// //     <div>
// //     <Button variant="contained"   onClick={() => navigate("/scannerform")}>Borrow</Button>
// //     <Button variant="contained"   onClick={() => navigate("/return_page")}>Return</Button>
    
// //     </div>
// //     </>
// //   );
// // }


// import React from 'react'
// import { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import { Button } from '@mui/material';
// // import { makeStyles } from '@material-ui/core/styles';
// import { Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
// import { styled } from '@mui/system';


// const StyledPaper = styled(Paper)`
//   margin: 20px;
// `;

// const StyledTable = styled(Table)`
//   min-width: 650px;
// `;

// const StyledTableHead = styled(TableHead)`
//   background-color: ${(props) => props.theme.palette.primary.main};
//   color: ${(props) => props.theme.palette.common.white};
// `;

// const StyledTableRow = styled(TableRow)`
//   &:nth-of-type(odd) {
//     background-color: ${(props) => props.theme.palette.action.hover};
//   }
// `;

// function MyTable() {
//   const [tableData, setTableData] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     // Fetch data from your backend API (replace with your actual API endpoint)
//     fetch('http://localhost:3000/data_of_equip_avai')
//       .then((response) => response.json())
//       .then((result) => setTableData(result[0]))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, []);


//   return (
//     <>
//     <h2>Table Data:</h2>
//     <StyledPaper>
//       <StyledTable>
//         <StyledTableHead>
//           <TableRow>
//             <TableCell>Equipment Name</TableCell>
//             <TableCell>Total</TableCell>
//             <TableCell>Available</TableCell>
//             <TableCell>Taken</TableCell>
//             <TableCell>Remaining</TableCell>
//           </TableRow>
//         </StyledTableHead>
//         <TableBody>
//           {tableData && tableData.map((row, i) => (
//             <StyledTableRow key={i}>
//               <TableCell>{row.equipment_name}</TableCell>
//               <TableCell>{row.total}</TableCell>
//               <TableCell>{row.available}</TableCell>
//               <TableCell>{row.taken}</TableCell>
//               <TableCell>{row.remaining}</TableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </StyledTable>
//     </StyledPaper>
//         <Button variant="contained"   onClick={() => navigate("/scannerform")}>Borrow</Button>
//         <Button variant="contained"   onClick={() => navigate("/return_page")}>Return</Button>
//     </>
//   )
// }

// export default MyTable

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, styled } from '@mui/material';
import './table.css';


const StyledButton2 = styled(Button)({
  padding: '10px 20px',
  fontSize: '16px',
  // fontFamily:'vardhana',
  backgroundColor: 'rgb(190,206,234)',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
  marginLeft: '28%'
});

function MyTable() {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch data from your backend API (replace with your actual API endpoint)
    fetch('http://localhost:3000/data_of_equip_avai')
      .then((response) => response.json())
      .then((result) => setTableData(result[0]))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <h2>Sports Equipment Database Management System</h2>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th>Equipment Name</th>
              <th>Total</th>
              <th>Available</th>
              <th>Taken</th>
              <th>Remaining</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{row.equipment_name}</td>
                <td>{row.total}</td>
                <td>{row.available}</td>
                <td>{row.taken}</td>
                <td>{row.remaining}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <StyledButton2 variant="contained" onClick={() => navigate("/scannerform")}>Borrow</StyledButton2>
        <StyledButton2 variant="contained" onClick={() => navigate("/return_page")}>Return</StyledButton2>
      </div>
    </>
  );
}

export default MyTable;


