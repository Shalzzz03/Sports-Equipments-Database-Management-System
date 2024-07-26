import React, { useState, useEffect } from 'react';
import './style.css';
import { styled } from '@mui/system';
// import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


const GradientBackground = styled('div')({
  background: 'rgb(240,248,255)',
  minHeight: '100vh', 
  maxHeight:'100vh'
});
function AdminData() {
    const [tableData, setTableData] = useState([]);
    


    useEffect(() => {
        // Fetch data from your backend API (replace with your actual API endpoint)
        fetch('http://localhost:3000/data_of_active_users')
          .then((response) => response.json())
          .then((result) => setTableData(result[0]))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);


    return (
      <GradientBackground>
      <h2>Registered Students Data</h2>
      <div className="table-container">
        
        <table className="custom-table">
          <thead>
            <tr>
              <th>Registration ID</th>
              <th>Full Name</th>
              <th>Division</th>
              <th>Branch</th>
              <th>Equipment</th>
              <th>Quantity</th>
              <th>Contact Number</th>
              <th>Time Required</th>
            </tr>
          </thead>
          <tbody>
            {tableData && tableData.map((row, i) => (
              <tr key={i} className={i % 2 === 0 ? 'even-row' : 'odd-row'}>
                <td>{row.reg_no}</td>
                <td>{row.full_name}</td>
                <td>{row.division}</td>
                <td>{row.branch}</td>
                <td>{row.equipment}</td>
                <td>{row.quantity}</td>
                <td>{row.contact_no}</td>
                <td>{row.timereq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      </GradientBackground>
      
    );
  };


export default AdminData;
