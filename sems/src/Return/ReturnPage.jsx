import React, { useState } from 'react';
import './returnPage.css';
import { styled } from '@mui/system';
import {Button} from '@mui/material';
import { useNavigate } from "react-router-dom";


const GradientBackground = styled('div')({
    background: 'rgb(240,248,255)',
    minHeight: '100vh', 
    maxHeight:'100vh'
  });

function ReturnPage() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form submitted with Registration ID:', inputValue); // Debug log
    
        try {
            const response = await fetch('http://localhost:3000/api/return', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ registrationId: inputValue }),
            });
    
            console.log('Response received:', response);
    
            const data = await response.json();
            console.log('Response JSON:', data);
    
            if (data.success) {
                alert(`Item bought by student ${inputValue} has been returned.`);
                setInputValue('');
                navigate("/main");
            } else {
                alert(data.error || 'Failed to return item.');
            }
        } catch (error) {
            console.error('Error occurred while submitting the form:', error);
            alert('An error occurred while returning item.');
        }
    };
    


    return (
        <GradientBackground>
            <div className="body">
            <h2>Enter your registration ID</h2>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <label >
                        Registration-ID: 
                        <br />
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                        />
                        
                    </label>
                    <br />
                    <br />  
                    <Button className='btn' type="submit" variant="outlined"  >Submit</Button>
                </form>
            </div>
            
            </div>
            
        </GradientBackground>
    );
}

export default ReturnPage;
