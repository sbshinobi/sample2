import React, { useEffect, useState, useRef } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import ContactButton from '../Components/button';
import useTheme from "../theme";
import img from "../Images/HomePage/successful-medical-team 1.png";
import CallUsButton from '../FormAndContectForm/CallUsButton';
import LeaveMessageButton from '../FormAndContectForm/LeaveMessageButton ';

function Banner({currentMode}) {
  const theme = useTheme();
  const [openCallUs, setOpenCallUs] = useState(false);
  const [openLeaveMessage, setOpenLeaveMessage] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(false);
  console.log(currentMode,"abc")

  // Refs for observing elements
  const textRef = useRef(null);
  const imageRef = useRef(null);

  const handleOpenCallUs = () => setOpenCallUs(true);
  const handleCloseCallUs = () => setOpenCallUs(false);
  const handleOpenLeaveMessage = () => setOpenLeaveMessage(true);
  const handleCloseLeaveMessage = () => setOpenLeaveMessage(false);

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger transition every time the text is visible
          setIsTextVisible(true);  
        } else {
          setIsTextVisible(false);
        }
      });
    }, observerOptions);

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Trigger transition every time the image is visible
          setIsImageVisible(true);  
        } else {
          setIsImageVisible(false);
        }
      });
    }, observerOptions);

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }
    if (imageRef.current) {
      imageObserver.observe(imageRef.current);
    }

    return () => {
      textObserver.disconnect();
      imageObserver.disconnect();
    };
  }, []);  // Empty dependency array to run only once

  return (
    <Box data-scroll-section sx={{ px: { sm: 7 }, mt: 10 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Column - Content */}
        <Grid
          item
          xs={12}
          md={6}
          ref={textRef} // Attach ref for observing
          style={{
            transform: isTextVisible ? 'translateX(0)' : 'translateX(-50px)',
            opacity: isTextVisible ? 1 : 0,
            transition: 'all 0.5s ease-in-out',
          }}
        >
          <Typography
            variant="h3"
            gutterBottom
            sx={{ color: theme.palette.primary.main, fontWeight: "bold" }}
          >
            Crafting Financial Wellness Where Precision Meets Personalization in Medical Billing Solutions
          </Typography>
          <Typography
            variant="h4"
            paragraph
            sx={{ color: theme.palette.secondary.main, fontWeight: "bold", fontSize: 20, mt: 5 }}
          >
            Our claim acceptance rate stands at 99.9%.
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ mt: 3 }}
          >
            From the moment a patient steps through your doors to the successful collection of payments, our dedicated Revenue Cycle Management (RCM) team is committed to identifying and resolving any obstacles hindering your financial growth.
          </Typography>
          <Box display="flex" gap={2}>
            <ContactButton
              label="Call Us"
              message="Feel free to call us anytime!"
              color="primary"
              onClick={handleOpenCallUs}
            />
            <ContactButton
              label="Leave a Message"
              message="Feel free to message us anytime!"
              color="secondary"
              onClick={handleOpenLeaveMessage}
            />
          </Box>
        </Grid>

        {/* Right Column - Image */}
        <Grid
          item
          xs={12}
          md={6}
          ref={imageRef} // Attach ref for observing
          style={{
            transform: isImageVisible ? 'translateY(0)' : 'translateY(50px)',
            opacity: isImageVisible ? 1 : 0,
            transition: 'all 0.5s linear', // Make transition consistent with the text
          }}
        >
          <Box
            component="img"
            src={img}
            alt="Successful Medical Team"
            sx={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px', // Rounded corners for a softer look
            }}
          />
        </Grid>
      </Grid>

      {/* Call Us Modal */}
      <CallUsButton open={openCallUs} onClose={handleCloseCallUs} currentMode={currentMode}/>
      {/* Leave Us a Message Modal */}
      <LeaveMessageButton open={openLeaveMessage} onClose={handleCloseLeaveMessage} currentMode={currentMode}/>
    </Box>
  );
}

export default Banner;
