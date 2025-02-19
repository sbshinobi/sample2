import React, { useState, useEffect } from "react";
import { Grid, Box, Typography, Link } from "@mui/material";
import { Facebook, Twitter as X, Email, LinkedIn } from '@mui/icons-material';
import useTheme from '../theme';
import logo from "../Images/HomePage/vcare trans 2.png";
import Loader from '../Components/LoaderFeature'; // Import the Loader component
import AOS from 'aos'; // Import AOS for scroll animations
import 'aos/dist/aos.css'; // Import AOS styles

const footerData = {
  contact: {
    phone: "00000000000",
    email: "vcare@business.com",
    address: "5530 Long Prairie Trace, Suite 600, Richmond, TX 77407"
  },
  hours: {
    monday_to_friday: "Monday - Friday",
    monday_to_friday_hours: "8:00 AM - 5:00 PM",
    saturday_to_sunday: "Saturday - Sunday",
    saturday_to_sunday_hours: "Closed"
  },
  services: [
    "Medical Billing and Coding",
    "Credentialing & Contracting",
    "Out of Network Negotiations",
    "Eligibility Verification",
    "Patient Billing Services"
  ]
};

function Footer({ currentMode }) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false); // State to manage loader visibility

  // AOS initialization for scroll animations
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Duration of the animation
      easing: 'ease-in-out',  // Easing function for smooth animation
      once: false,  // Ensure animation happens every time the element is visible
      mirror: true,  // Allow animation on reverse scrolling (i.e., when scrolling up)
    });
  }, []);

  const backgroundColor = currentMode === "light" ? theme.palette.primary.main : theme.palette.background.default;
  const textColor = currentMode === "light" ? theme.palette.text.white : theme.palette.text.white;
  const textColour = currentMode === "light" ? theme.palette.text.white : theme.palette.primary.main;
  const boxShadow = currentMode === "light" ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "0 4px 10px rgba(255, 255, 255, 0.1)";

  // Handle logo click
  const handleLogoClick = () => {
    setLoading(true); // Show the loader
    setTimeout(() => {
      setLoading(false); // Hide the loader after a delay (simulate loading)
      window.location.href = '/'; // Redirect to home page
    }, 1500); // 1.5 seconds delay to simulate loading
  };

  return (
    <Box data-scroll-section
      sx={{
        background: backgroundColor,
        mt: 5,
        py: 4,
        borderRadius: "10px",
        boxShadow: boxShadow,
        textAlign: { xs: "center", sm: "start" },
      }}
    >
      {loading && <Loader />} {/* Display Loader when loading is true */}

      <Grid container spacing={4} sx={{ justifyContent: "center", px: { sm: 10, xs: 3 }, alignItems: "flex-start" }}>
        {/* Column 1 - Contact Info */}
        <Grid item xs={12} sm={3} sx={{ mt: 4 }} data-aos="fade-up" data-aos-delay="200">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: textColour,
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Contact
          </Typography>
          <Typography variant="body2" sx={{ color: textColor, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
            <Box sx={{ marginBottom: "8px", fontWeight: "500" }}>{footerData.contact.phone}</Box>
            <Box sx={{ marginBottom: "8px", fontWeight: "500" }}>
              <Link href={`mailto:${footerData.contact.email}`} color="inherit" sx={{ textDecoration: "none", "&:hover": { textDecoration: "underline" } }}>
                {footerData.contact.email}
              </Link>
            </Box>
            <Box sx={{ marginBottom: "8px", fontWeight: "500" }}>{footerData.contact.address}</Box>
          </Typography>
        </Grid>

        {/* Column 2 - Our Hours */}
        <Grid item xs={12} sm={3} sx={{ mt: 4 }} data-aos="fade-up" data-aos-delay="400">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: textColour,
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Our Hours
          </Typography>
          <Box sx={{ bgcolor: theme.palette.secondary.main, paddingX: 1, borderRadius: "8px", mb: 2, mr: { sm: 13 }, display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="body2" sx={{ color: textColor }}>
              <Box>{footerData.hours.monday_to_friday}</Box>
              <strong>{footerData.hours.monday_to_friday_hours}</strong>
            </Typography>
          </Box>
          <Box sx={{ bgcolor: theme.palette.secondary.main, paddingX: 1, borderRadius: "8px", mb: 2, mr: { sm: 13 } }}>
            <Typography variant="body2" sx={{ color: textColor }}>
              <Box>{footerData.hours.saturday_to_sunday}</Box>
              <Box sx={{ fontWeight: "bold", display: "flex", justifyContent: "center" }}>{footerData.hours.saturday_to_sunday_hours}</Box>
            </Typography>
          </Box>
        </Grid>

        {/* Column 3 - Our Services */}
        <Grid item xs={12} sm={3} sx={{ mt: 4 }} data-aos="fade-up" data-aos-delay="600">
          <Typography
            variant="h6"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: textColour,
              mb: 2,
              fontSize: { xs: "1rem", sm: "1.25rem" },
            }}
          >
            Our Services
          </Typography>
          <Typography variant="body2" sx={{ color: textColor, fontSize: { xs: "0.875rem", sm: "1rem" } }}>
            {footerData.services.map((service, index) => (
              <Box key={index} sx={{ marginBottom: "8px" }}>
                {service}
              </Box>
            ))}
          </Typography>
        </Grid>

        {/* Column 4 - Logo */}
        <Grid item xs={12} sm={3} sx={{ display: "flex", justifyContent: "center", alignItems: "center", mt: 4 }} data-aos="zoom-in" data-aos-delay="800">
          <Link onClick={handleLogoClick} sx={{
            borderRadius: "50%",
            backgroundColor: "white",
            p: 4,
            cursor: "pointer",
            boxShadow: boxShadow,
            display: "flex",
            justifyContent: "center",
            "&:hover": { transform: "scale(1.05)", transition: "transform 0.3s" }
          }}>
            <img
              src={logo}
              alt="Vcare Logo"
              style={{
                width: "80px",
                height: "80px",
                objectFit: "contain",
              }}
            />
          </Link>
        </Grid>
      </Grid>

      {/* White Line */}
      <Box sx={{ borderBottom: "1px solid white", mt: 5 }} />

      {/* Footer Bottom (Copyright and Social Icons) */}
      <Box sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        mt: 3,
        px: { sm: 10, xs: 3 },
        color: "white",
        flexDirection: { xs: "column", sm: "row" },
        textAlign: { xs: "center", sm: "left" },
      }}>
        <Typography variant="body2" sx={{
          fontWeight: "500",
          color: textColor,
          fontSize: { xs: "0.875rem", sm: "1rem" },
          mb: { xs: 2, sm: 0 },
        }}>
          © Copyright 2023 Vcare Medical Billing – All Rights Reserved
        </Typography>

        {/* Social Media Icons */}
        <Box sx={{
          display: "flex",
          gap: 2,
          justifyContent: { xs: "center", sm: "flex-start" },
        }}>
          <Link href="https://facebook.com" target="_blank" sx={{ color: textColor, "&:hover": { color: theme.palette.primary.main } }}>
            <Facebook />
          </Link>
          <Link href="https://twitter.com" target="_blank" sx={{ color: textColor, "&:hover": { color: theme.palette.primary.main } }}>
            <X />
          </Link>
          <Link href="mailto:vcare@business.com" sx={{ color: textColor, "&:hover": { color: theme.palette.primary.main } }}>
            <Email />
          </Link>
          <Link href="https://linkedin.com" target="_blank" sx={{ color: textColor, "&:hover": { color: theme.palette.primary.main } }}>
            <LinkedIn />
          </Link>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
