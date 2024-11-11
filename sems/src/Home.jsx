import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import Navbar from './Navigation Bar/Mynavbar';
import { styled } from '@mui/system';

const FlexContainer = styled('div')({
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  Height: '80vh', // Adjust height as needed
  // border: '2px solid #ccc', // Just for visualization
  background: 'rgb(240,248,255)',
});

const Item1 = styled('div')({
  width: '50vm',
  height: '84vh',
  // background: 'rgb(190,206,234)',
  background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(187,218,244,1) 100%)',
  display: 'flex',
  flex: '1',
  flexFlow:'column',
  borderRight: '3px solid rgb(105,105,105)',
  justifyContent: 'center',
  alignItems: 'center',
});

const Item2 = styled('div')({
  width: '50vm',
  height: '84vh',
  background: 'rgb(240,248,255)',
  // background: 'linear-gradient(0deg, rgba(190,206,234,1) 9%, rgba(63,118,244,1) 100%)',
  display: 'flex',
  flex: '1',
  flexFlow:'column',
  justifyContent: 'center',
  alignItems: 'center',
});

const StyledButton1 = styled(Button)({
  marginTop: '40px',
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
});
const StyledButton2 = styled(Button)({
  marginTop: '40px',
  padding: '10px 20px',
  fontSize: '16px',
  // fontFamily:'vardhana',
  backgroundColor: 'rgb(190,206,234)',
  color: 'black',
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px',
});

const Image = styled('img')({
  width: '10vm',
  height: '50vh'
});


const Home = () => {
  const navigate = useNavigate();
  return (
    <>
    <Navbar/>

    <FlexContainer className='flex-container'>
      <Item1>
        <p><strong>For Faculty</strong></p>
        {/* <Image src="/faculty.jpg" alt="" /> */}
        <StyledButton1 className='item' variant="contained" onClick={() => navigate("/adminLogin")}>Admin Login</StyledButton1>
      </Item1>
     
     <Item2>
      <p><strong>For Students</strong></p>
        <StyledButton2 className='item' variant="outlined" onClick={() => navigate("/main")}>User Login</StyledButton2>
     </Item2>
      
      <p/>
    </FlexContainer>
    </>
    
  )
}

export default Home
