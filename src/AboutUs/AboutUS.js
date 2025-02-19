import React from 'react';
import Banner from "./Banner"
import AboutContent from './AboutContent';
import ContactUs from './ContactUs';
import useTheme from "../theme"; // Import the useTheme hook
function About( {currentMode}) {
  const theme = useTheme(); // Use the theme hook here to access your theme
 return (
  <>
  <Banner/>
  <AboutContent/>
  <ContactUs currentMode={currentMode} />
  
  </>  
  );
}

export default About;
