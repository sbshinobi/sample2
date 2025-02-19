import React, { useEffect } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import useTheme from "../theme"; // Import the useTheme hook
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS CSS for animations

function AboutContent() {
  const theme = useTheme(); // Use the theme hook here to access your theme

  // JSON data for images
  const Data = [
    {
      heading: "Certified Coders",
      description:
        "Our AAPC certified coders and skilled billers offer detailed and accurate services. We relay valuable knowledge and train your team in revenue-boosting best practices.",
    },
    {
      heading: "Experience",
      description:
        "With 15 years' expertise, we foster strong insurer-client bonds and ensure unwavering service quality.",
    },
    {
      heading: "Personalized Services",
      description:
        "We provide personalized services, simplifying complex billing for timely reimbursement.",
    },
    {
      heading: "Up To Date ",
      description:
        "We stay current with industry regulations and changes for accurate billing. Understanding unique client needs, we customize our services accordingly.",
    },
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
      easing: 'ease-in-out', // Smooth easing for transitions
      once: false, // This makes the animation happen every time the element comes into view
    });
  }, []);

  return (
    <Box data-scroll-section sx={{ px: { sm: 7 }, mt: 10 }}>
      <Grid
        container
        spacing={4}
        justifyContent="center"
        alignItems="stretch" // Make the columns stretch to equal height
        sx={{ minHeight: '100%' }} // Ensures the container itself takes up full height
      >
        {/* Left Column - Content */}
        <Grid
          item
          xs={12}
          md={5}
          sx={{ display: 'flex', flexDirection: 'column' }}
          data-aos="fade-up" // Fade-in effect for the left column content
          data-aos-delay="100"
        >
          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            At <Typography component="span" sx={{ fontWeight: '600' }}>Vcare Medical Billing</Typography>, our pride lies in our team of dedicated experts committed to delivering top-tier medical billing and coding services. Our professionals are highly skilled in the latest coding techniques and possess extensive experience in the healthcare industry.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            We prioritize accessibility, transparency, and communication at <Typography component="span" sx={{ fontWeight: '600' }}>Vcare</Typography> Medical Billing. Establishing robust client relationships is crucial, and our team ensures prompt responsiveness to all queries and concerns. Accessible and knowledgeable, our team members provide personalized attention to every client.
          </Typography>
          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            Exceptional customer service defines Vcare <Typography component="span" sx={{ fontWeight: '600' }}>Medical Billing</Typography>. Committed to excellence, our team diligently ensures accurate, timely, and efficient billing services tailored to meet each client's distinct requirements.
          </Typography>
        </Grid>

        {/* Right Column - Data */}
        <Grid
          item
          xs={12}
          md={7}
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <Grid container spacing={4} sx={{ flex: 1 }}>
            {/* Map through the Data and create Paper items */}
            {Data.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                key={index}
                data-aos="fade-up" // Fade-in effect for each Paper card
                data-aos-delay={index * 100 + 200} // Stagger the appearance
              >
                <Paper
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    p: 2,
                    mt: 4,
                    borderRadius: 2,
                    alignItems: 'left',
                    boxShadow: 1,
                    background: '#0088CA1A',
                    minHeight: { sm: '31vh' },
                    minWidth: { sm: '22vw' },
                  }}
                  data-aos="zoom-in" // Zoom-in effect for each Paper card
                  data-aos-delay={index * 100 + 200} // Staggered delay based on index
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: '600', color: theme.palette.primary.main }}
                  >
                    {item.heading}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AboutContent;
