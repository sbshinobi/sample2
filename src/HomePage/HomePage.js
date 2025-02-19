import React from 'react';
import { Grid, Typography, Box } from '@mui/material';
import Services from "./OurServices"
import Banner from "./Banner"
import OurClients from "./OurClients"
import WhyUs from './WhyUs';
import useTheme from "../theme"; // Import the useTheme hook


function Home( {currentMode}) {
  const theme = useTheme(); // Use the theme hook here to access your theme

  return (
  <>
  <Banner currentMode={currentMode}/>
  <OurClients currentMode={currentMode}/>
  <Services/>
  <WhyUs/>
  </>  
  );
}

export default Home;
