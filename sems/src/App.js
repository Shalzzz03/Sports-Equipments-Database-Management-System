import React from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import DataDisplay from './DataDisplay';
import ScannerForm from './Borrow/ScannerForm';
import AdminLogin from './Admin/AdminLogin';
import AdminData from './Admin/AdminData';
import ReturnPage from './Return/ReturnPage';
import BorrowingForm from './Borrow/BorrowingForm';


function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/> 
        <Route path="/main" element={<DataDisplay/>} />
        <Route path="/adminlogin" element={<AdminLogin/>}/>
        <Route path="/scannerform" element={<ScannerForm/>}/>
        <Route path="/admin_data" element = {<AdminData/>}/>
        <Route path="/return_page" element = {<ReturnPage/>}/>
        <Route path = "/main" element={<BorrowingForm/>} />
      </Routes>
    </BrowserRouter>
    
    {/* <Main/> */}
    </> 
  );
}

export default App;
