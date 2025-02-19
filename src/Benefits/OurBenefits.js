import React, { useEffect } from "react";
import { Grid, Typography, Box, Paper } from "@mui/material";
import useTheme from "../theme"; // Import the useTheme hook
import img1 from "../Images/Benefits/benefits1.png";
import img2 from "../Images/Benefits/benefits2.png";
import img3 from "../Images/Benefits/benefits3.png";
import img4 from "../Images/Benefits/benefits4.png";
import img5 from "../Images/Benefits/benefits5.png";
import img6 from "../Images/Benefits/benefits6.png";
import AOS from "aos";  // Import AOS
import "aos/dist/aos.css";  // Import AOS styles

function OurBenefits() {
  const theme = useTheme(); // Use the theme hook here to access your theme
  const Benefits = [
    {
      img: img1,
      heading:
        "Outsourcing medical billing enables increased focus on patient care.",
      description:
        "While medical billing is vital in the US healthcare system, your core responsibility lies in patient care. By partnering with Right Medical Billing, you can channel your resources toward delivering top-quality care. This enhances daily patient flow and satisfaction, subsequently increasing revenue. Freeing your team from financial burdens empowers them to focus on delivering excellent care effectively.",
    },
    {
      img: img2,
      heading:
        "Outsourcing medical billing reduces administrative responsibilities.",
      description:
        "Maintaining an in-house billing team entails significant time and financial investment. Typically, these teams also handle front desk duties, leading to a diversion of attention from patient care. When front desk tasks like claim preparation and data entry take precedence, it hampers patient flow, ultimately impacting revenue. Outsourcing billing to a dedicated company resolves insurance issues, cutting administrative expenses. This allows reallocating resources from administrative tasks back into the clinical aspects of your facility.",
    },
    {
      img: img3,
      heading: "Outsourcing medical billing improves cash flow.",
      description:
        "Selecting Right Medical Billing as your revenue cycle management partner can elevate your revenue potential by up to 30%. You'll enjoy increased patient time and faster payments without the need for continuous training investments. We specialize in crafting error-free claims, boasting a 99.9% claim acceptance rate. Moreover, we cut costs by minimizing claim processing time, conducting daily billing and accounts receivable follow-ups on submitted claims, and promptly dispatching clean claims.",
    },
    {
      img: img4,
      heading: "Outsourcing accounts receivable reduces billing errors",
      description: (
        <>
        At{" "}
          <Typography
            component="span"
            sx={{
              fontWeight: "600",
              Color: theme.mode === "light" ? theme.palette.text.black : theme.palette.text.white,
            }}
          >
            Vcare
          </Typography>{" "}
          
            Medical Billing, our dedicated team prioritizes the accurate and prompt submission of all your claims. We work tirelessly to minimize the number of rejected claims, offering comprehensive feedback aimed at maximizing your reimbursements. Our commitment extends beyond simple claim submission; we strive for efficiency and effectiveness in every step of the billing process, ensuring a smoother experience and better financial outcomes for your practice.
          
        </>
      ),
    },
    {
      img: img5,
      heading: "Outsourcing billing contributes to enhanced patient satisfaction.",
      description:
        "Streamlining office tasks lightens the load on your staff, leading to increased productivity, efficiency, and boosted morale among employees. Our courteous and patient Right Medical Billing customer service team offers direct communication with patients, ensuring a supportive approach to addressing any billing inquiries, providing thorough assistance, and handling concerns with utmost care and attention.",
    },
    {
      img: img6,
      heading: "Ensuring Patient Data Security",
      description:
        "Medical records are highly valuable in the digital realm, often valued significantly higher, about 10 to 20 times, compared to other forms of data. When you partner with Right Medical Billing, our team of experts diligently invests in robust security measures. We prioritize the protection of patient information, ensuring comprehensive safeguards against potential data breaches. This proactive approach minimizes the risk of any unauthorized access, guaranteeing the utmost confidentiality and security for all sensitive medical data.",
    },
  ];

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of the animation in milliseconds
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
        Benefits of Outsourcing
      </Typography>

      <Grid container spacing={4} sx={{ mt: { sm: 4 } }}>
        {Benefits.map((Benefit, index) => (
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
              }}
              data-aos="fade-up" // AOS animation for fade-up with delay
              data-aos-delay={`${index * 200}`} // Delay based on index to stagger animations
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
                    maxWidth: { sm: "40vw" },
                  }}
                  data-aos="zoom-in-right"// AOS fade-right animation for text
                >
                  {Benefit.heading}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    mt: 3,
                    color: theme.palette.text.secondary,
                    maxWidth: { sm: "40vw" },
                  }}
                  data-aos="zoom-in-left" // AOS fade-left animation for description
                >
                  {Benefit.description}
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
                  data-aos="fade-up" // AOS fade-up animation for image
                >
                  <img
                    src={Benefit.img}
                    alt={Benefit.heading}
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

export default OurBenefits;
