import React, { useEffect } from 'react';
import { Grid, Typography, Box, Paper } from '@mui/material';
import useTheme from "../theme"; // Import the useTheme hook
import img1 from "../Images/HomePage/post1.png"; 
import img2 from "../Images/HomePage/post2.png"; 
import img3 from "../Images/HomePage/post3.png"; 
import img4 from "../Images/HomePage/post4.png"; 
import img5 from "../Images/HomePage/post5.png"; 
import img6 from "../Images/HomePage/post6.png"; 
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles

const services = [
  {
    img: img1,
    heading: "CODING AND MEDICAL BILLING",
    description: "Accurate medical billing and coding play a crucial role in securing reimbursements promptly. Precision is key; even minor errors can cause payment delays. At Right Medical Billing, our dedicated team ensures healthcare facilities receive rightful reimbursements from patients and payers for services rendered."
  },
  {
    img: img2,
    heading: "Streamlined Accounts Management",
    description: "At Vcare Medical Billing, we proactively handle your practice's accounts receivable. Identifying any pending payments owed to the provider or healthcare facility, we diligently pursue outstanding balances from patients or payors. Timely payment posting ensures an efficient billing workflow."
  },
  {
    img: img3,
    heading: "Credentialing and Contract Foundation",
    description: "Establishing a healthcare facility hinges on credentialing and contracting, forming the bedrock of relationships with both insurance companies and patients. At RMB, we negotiate insurance payer contracts and maintain their currency, enabling you to achieve optimal reimbursement rates."
  },
  {
    img: img4,
    heading: "Expert Out-of-Network Negotiations",
    description: "At Vcare Medical Billing, we adeptly negotiate out-of-network claims with major pricing vendors like Multiplan, Zelis, Viant, and GCS. Leveraging decades of expertise, our negotiation and settlement team excels in this intricate aspect of billing. We're recognized industry-wide as specialists in out-of-network billing."
  },
  {
    img: img5,
    heading: "Eligibility and Insurance Verification",
    description: "Accurate eligibility and insurance benefits verification are crucial for obtaining precise information on coverage and reimbursement. It's essential for healthcare facilities to confirm each patient's eligibility and benefits to secure payment for provided services. Count on us as an integral part of your team in this pivotal process."
  },
  {
    img: img6,
    heading: "Complete RCM Services",
    description: "Vcare Medical Billing manages the entire revenue cycle, supporting from patient arrival to payment receipt. We assist in compliance, workflow, and staff training, acting as an extension of your team."
  }
];

function Home() {
  const theme = useTheme(); // Use the theme hook here to access your theme

  // Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      easing: 'ease-in-out',  // Easing function for smooth animation
      once: false,  // Ensure animation happens every time the element is visible
      mirror: true,  // Allow animation on reverse scrolling (i.e., when scrolling up)
    });
  }, []);

  return (
    <Box data-scroll-section sx={{ px: { sm: 7 }, mt: 10 }}>
      <Typography 
        variant='h3' 
        textAlign="center" 
        sx={{
          color: theme.palette.primary.main, 
          fontWeight: "bold", 
          fontSize: 25, 
          fontFamily: "inter"
        }}
      >
        Medical Billing Services We Offer
      </Typography>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} 
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`}  // Stagger delay based on index
          >
            <Paper 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                p: 2,
                borderRadius: 2,
                minHeight: { sm: "27rem" }, 
              }}
            >
              <img 
                src={service.img} 
                alt={service.heading} 
                style={{ 
                  width: '100%', 
                  maxHeight: '200px', 
                  objectFit: 'cover', 
                  borderRadius: '8px' 
                }} 
              />
              <Typography 
                variant="body1" 
                sx={{ mt: 2, color: theme.palette.primary.main, fontWeight: 'bold' }}
              >
                {service.heading}
              </Typography>
              <Typography 
                variant="body2"
                sx={{ mt: 1, color: theme.palette.text.secondary }}
              >
                {service.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
