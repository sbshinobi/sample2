import React, { useEffect } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import ContactButton from "../Components/button";
import useTheme from "../theme"; // Import the useTheme hook
import img1 from "../Images/HomePage/post1.png";
import img3 from "../Images/HomePage/post3.png";
import img5 from "../Images/HomePage/post5.png";
import img6 from "../Images/HomePage/post6.png";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const services = [
  {
    img: img1,
    heading: "Medical Billing and Coding",
    description:
      "Reignite your financial success with our seasoned billing and coding professionals, boasting 25+ years of combined expertise. Accurate medical billing and coding is paramount for securing reimbursements. Even minor errors can lead to claim rejections, triggering lengthy resubmission procedures and payment delays.",
  },
  {
    img: img3,
    heading: "Eligibility Verification",
    description:
      "Verifying patient insurance eligibility is a critical first step in billing. Service providers must swiftly and accurately gather all eligibility information. Our focus is on preventing denials and avoiding payment delays by providing quality RCM services. This boosts revenue at the time of service and enhances patient satisfaction.",
  },
  {
    img: img5,
    heading: "Credentialing & Contracting",
    description:
      "Strengthen Your Practice. Our expertise enhances relationships with insurers and patients, allowing better service and higher reimbursement rates. Credentialing and contracting are vital for clinics, forming the core of insurer and patient relationships. Right Medical Billing secures contracts and maintains your facility or physician's agreements with carriers.",
  },
  {
    img: img6,
    heading: "Patient Billing Services",
    description:
      "Our patient billing services ensure accuracy and efficiency in handling billing procedures. From invoicing to payment processing, we streamline the billing experience, providing clarity and ease for patients.",
  },
];

function Home() {
  const theme = useTheme(); // Use the theme hook here to access your theme

  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation
      once: true, // Animation will only happen once
    });
  }, []);

  return (
    <Box
      data-scroll-section
      sx={{
        px: { sm: 7 },
        mt: { xs: 7, sm: 15 },
        borderRadius: "10px",
      }}
    >
      <Typography
        variant="h2"
        textAlign="center"
        sx={{
          color: theme.palette.primary.main,
          fontWeight: "bold",
          fontSize: { xs: 22 },
          fontFamily: "inter",
        }}
        data-aos="fade-up" // AOS animation for fade-up
      >
        Our Services
      </Typography>

      <Grid container spacing={4} sx={{ mt: { sm: 4 } }}>
        {services.map((service, index) => (
          <Grid item xs={12} key={index}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                p: 2,
                px: { xs: 3, sm: 10 },
                py: { sm: 10 },
                mt: 4,
                borderRadius: 2,
                alignItems: "center",
                boxShadow: 1,
                background:
                  theme.palette.mode === "light"
                    ? "linear-gradient(135deg, #0084C31A, #FF9C251A)"
                    : "none",
              }}
              data-aos="fade-up" // AOS animation for fade-up
            >
              {/* Left side: Text */}
              <Grid item xs={12} sm={8}>
                <Typography
                  variant="h6"
                  sx={{
                    mt: 2,
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                    fontSize: { xs: "1.1rem", sm: "1.2rem" },
                  }}
                  data-aos="zoom-in-right"// AOS animation for fading in from right
                >
                  {service.heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: theme.palette.text.secondary,
                    maxWidth: { sm: "40vw" },
                  }}
                  data-aos="zoom-in-left" // AOS animation for fading in from left
                >
                  {service.description}
                </Typography>
              </Grid>

              {/* Right side: Image */}
              <Grid item xs={12} sm={4}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: { xs: 5, sm: 0 },
                  }}
                  data-aos="fade-up" // AOS animation for fade-up
                >
                  <img
                    src={service.img}
                    alt={service.heading}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Home;
