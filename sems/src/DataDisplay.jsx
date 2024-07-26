// import React from 'react';
// import MyTable from './table/MyTable';
// import Navbar from './Navigation Bar/Mynavbar'
// function Main() {
//   return (
//     <>
//     <Navbar/>
//     <MyTable/>
//     </>
//   )
// }

// export default Main
import React from 'react';
import { styled } from '@mui/system';
import MyTable from './table/MyTable';
import Navbar from './Navigation Bar/Mynavbar';

// Define the styled component with gradient background
const GradientBackground = styled('div')({
  background: 'rgb(240,248,255)',
  // Add any other styles you want
  minHeight: '100vh', // Set a minimum height to cover the viewport
});

function Main() {
  return (
    <GradientBackground>
      <Navbar />
      <MyTable />
    </GradientBackground>
  );
}

export default Main;
