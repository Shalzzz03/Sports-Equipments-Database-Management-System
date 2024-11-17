import React, {useState} from 'react';
import { Button,  Stack, InputLabel, Select, MenuItem, FormControl} from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './BorrowForm.css';

// import ActiveUserInputApi from './ActiveUserInputApi';



function BorrowingForm() {
    const [fullName, setFullName] = useState('')
    const [regiNo, setRegiNo] = useState('')
    const [equipment, setEquipment] = useState('')
    const [quantity, setQuantity] = useState('')
    const [timeRequired, setTimeRequired] = useState('')
    const [contact_no, setContact_no] = useState('')
    const [branch, setBranch] = useState('')
    const [division, setDivision] = useState('')
    

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const userInput = {
            equipment: equipment,
            quantity: quantity,
            timereq: timeRequired,
            full_name: fullName,
            reg_no: regiNo,
            contact_no: contact_no,
            branch: branch,
            division: division
        };
    
        try {
            // Make POST request to input_active_users endpoint
            const response1 = await axios.post('http://localhost:3000/input_active_users', userInput, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Data submitted successfully to input_active_users');
            console.log(response1.data);
    
            // Make POST request to update_table endpoint
            const response2 = await axios.post('http://localhost:3000/update_table', userInput, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log('Data submitted successfully to update_table');
            console.log(response2.data);
    
            // Navigate to "/main" after both requests are completed successfully
            navigate("/main");
        } catch (error) {
            // Handle errors
            console.error('Error submitting data:', error.response?.data || error.message);
            // You can provide more specific error messages or handle different types of errors separately here
            // For example, you can check error.response?.status to handle different HTTP status codes
        }
    };
    

    function runPythonFun(e) {

    // this request will read the note, but only after it is created!
    fetch("http://localhost:3000/rundemo")
        .then(response => response.json())
            .then(data => {
                    setFullName(data[0][0].full_name);
                    setRegiNo(data[0][0].reg_no);
                    setContact_no(data[0][0].contact_no);
                    setBranch(data[0][0].branch);
                    setDivision(data[0][0].division);
                    
                console.log(data[0][0]);
            })
        .catch(error => {
            console.error('Error during GET request:', error);
            // Handle the error here (e.g., show an error message to the user)
        });
}       
        

 
    return (
        <div className='body'>
            <h1>Registration Form</h1>
            <div className="card">
            

            <Button variant="outlined" onClick={runPythonFun} color="secondary" type="submit">Scan Me for I-Card verification</Button>
            <br/>
            <div className="div1">
            <h3>Name:{fullName}</h3>
            <h3>Reg.ID NO.:{regiNo}</h3>
            <h3>Phone No.:{contact_no}</h3>
            <h3>Branch:{branch}</h3>
            </div>
            
            
            
            <form onSubmit={handleSubmit}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    
                </Stack>
                
                <FormControl fullWidth className="form-control-spacing" >
                <InputLabel  id="demo-simple-select-label">Equipment</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={equipment}
                    label="Equipment"
                    onChange={e => setEquipment(e.target.value)}
                >
                    <MenuItem value='Cricketball'>Cricketball</MenuItem>
                    <MenuItem value='Football'>Football</MenuItem>
                    <MenuItem value='Vollyball'>Vollyball</MenuItem>
                </Select>
                </FormControl>
                
                <FormControl fullWidth className="form-control-spacing">
                <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="Quantity"
                    onChange={e => setQuantity(e.target.value)}
                >
                    <MenuItem value='1'>1</MenuItem>
                    <MenuItem value='2'>2</MenuItem>
                    <MenuItem value='3'>3</MenuItem>
                </Select>
                </FormControl>
                <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Time</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={timeRequired}
                    label="Time"
                    onChange={e => setTimeRequired(e.target.value)}
                >
                    <MenuItem value='1'>1 hr</MenuItem>
                    <MenuItem value='2'>2 hr</MenuItem>
                    <MenuItem value='3'>3 hr</MenuItem>
                </Select>
                </FormControl>
                <div className="div2">
                <Button variant="outlined" className='submitbtn'  color="secondary" type="submit" >Submit</Button>
                </div>
                
            </form>
            
             
        
                
            </div>
        </div>
    )
}

export default BorrowingForm
