import React from 'react';
import { Box } from '@mui/material';
import Bannerr from './Banner';  // Ensure the component is named correctly
import OurServices from './OurServices';  // Ensure this component is correctly imported
import  useTheme from '../theme';  // Import useTheme from MUI

function Service() {
  const theme = useTheme(); // Use the MUI theme hook here to access your theme

  return (
    <Box data-scroll-section>
      <Bannerr />
      <OurServices />
    </Box>
  );
}

export default Service;
