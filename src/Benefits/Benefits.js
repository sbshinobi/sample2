import React from 'react';
import { Box, Typography } from '@mui/material';
import Bannerr from './Banner';  // Ensure the component is named correctly
import OurBenefits from './OurBenefits';  // Ensure this component is correctly imported
import  useTheme from '../theme';  // Import useTheme from MUI

function Benefits() {
  const theme = useTheme(); // Use the MUI theme hook here to access your theme

  return (
    <Box data-scroll-section>
      <Bannerr />
      <OurBenefits />
    </Box>
  );
}

export default Benefits;
