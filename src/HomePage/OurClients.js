import React, { useState, useEffect, useRef } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import ContactButton from '../Components/button';
import useTheme from "../theme"; // Import the useTheme hook
import img from "../Images/HomePage/card.png";
import img2 from "../Images/HomePage/card (1).png";
import img3 from "../Images/HomePage/card (2).png";
import img4 from "../Images/HomePage/card (3).png";
import img5 from "../Images/HomePage/card (4).png";
import img6 from "../Images/HomePage/Group 12.png";
import ScheduleAppointmentModal from '../FormAndContectForm/ScheduleAppointmentModal'; // Import your modal component
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles

function OurClints({currentMode}) {
  const theme = useTheme(); // Use the theme hook here to access your theme
  const [modalOpen, setModalOpen] = useState(false); // State to control modal visibility
  const [visibleImages, setVisibleImages] = useState(new Set()); // Track which images are visible
  const [isTextVisible, setIsTextVisible] = useState(false); // State to track text visibility

  const textRef = useRef(null); // Reference for the text section

  const imagesData = [
    { src: img, alt: "Successful Medical Team 1" },
    { src: img2, alt: "Successful Medical Team 2" },
    { src: img3, alt: "Successful Medical Team 3" },
    { src: img4, alt: "Successful Medical Team 4" },
    { src: img5, alt: "Successful Medical Team 5" },
    { src: img6, alt: "Successful Medical Team 6" },
  ];

  const handleOpen = () => setModalOpen(true); // Function to open the modal
  const handleClose = () => setModalOpen(false); // Function to close the modal

  useEffect(() => {
    // Initialize AOS with `once: false` to trigger animations every time the element becomes visible
    AOS.init({
      duration: 1000, // Duration of the animation
      easing: 'ease-in-out', // Easing function for smooth animation
      once: false, // Ensure animation happens every time the element is visible
    });

    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.2, // Trigger when 20% of the element is visible
    };

    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleImages((prev) => new Set(prev).add(entry.target.id));
        } else {
          setVisibleImages((prev) => {
            const updated = new Set(prev);
            updated.delete(entry.target.id);
            return updated;
          });
        }
      });
    }, observerOptions);

    const textObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsTextVisible(true); // Mark text as visible when it enters the viewport
        } else {
          setIsTextVisible(false); // Mark text as not visible when it leaves
        }
      });
    }, observerOptions);

    // Observing the images
    const images = document.querySelectorAll('.client-image'); 
    images.forEach((image) => imageObserver.observe(image));

    // Observing the text
    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    return () => {
      images.forEach((image) => imageObserver.unobserve(image));
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <Box data-scroll-section sx={{ px: { sm: 7 }, mt: 10 }}>
      <Grid container spacing={4} justifyContent="center" alignItems="center">
        {/* Left Column - Content */}
        <Grid item xs={12} md={6} ref={textRef} data-aos="fade-right">
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              color: theme.palette.primary.main,
              fontWeight: "bold",
              transform: isTextVisible ? 'translateY(0)' : 'translateY(50px)', // Transition for text visibility
              opacity: isTextVisible ? 1 : 0,
              transition: 'all 0.5s ease-in-out', // Apply transition
            }}
          >
            Know Our Clients
          </Typography>

          <Typography
            variant="body1"
            paragraph
            sx={{
              mt: 3,
              transform: isTextVisible ? 'translateY(0)' : 'translateY(50px)', // Transition for text visibility
              opacity: isTextVisible ? 1 : 0,
              transition: 'all 0.5s ease-in-out', // Apply transition
            }}
          >
            As a trusted authority in medical billing, catering to a diverse spectrum of organizations, our industry- standing reputation is a testament to our reliability and expertise. Our tailored services cater to the unique billing needs of various entities, ensuring seamless operations and financial transparency.
          </Typography>
          <Box>
            <ContactButton
              label="Schedule Appointment"
              message="Feel free to message us anytime!"
              color="secondary"
              onClick={handleOpen} // Pass the handleOpen function to open the modal
            />
          </Box>
        </Grid>

        {/* Right Column - Images */}
        <Grid item xs={12} md={6}>
          <Grid container spacing={2} justifyContent="center">
            {imagesData.map((image, index) => (
              <Grid item xs={4} key={index}>
                <Paper
                  component="img"
                  src={image.src}
                  alt={image.alt}
                  id={`image-${index}`} // Give each image a unique ID
                  className="client-image" // Add class to each image
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '8px',
                    transform: visibleImages.has(`image-${index}`) ? 'translateY(0)' : 'translateY(50px)', // Transition when image is visible
                    opacity: visibleImages.has(`image-${index}`) ? 1 : 0,
                    transition: 'all 0.5s ease-in-out', // Transition effect for visibility
                  }}
                  data-aos="fade-right" // Apply fade-right effect to images
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Conditionally render the modal */}
      <ScheduleAppointmentModal open={modalOpen} onClose={handleClose} mode={theme.palette.mode} currentMode={currentMode} />
    </Box>
  );
}

export default OurClints;
