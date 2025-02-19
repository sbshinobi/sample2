import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {
  Brightness4,
  Brightness7,
  Menu as MenuIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../Images/HomePage/vcare trans 2.png"; // Import the logo image
import ContactButton from "../Components/button";
import Loader from "./LoaderFeature"; // Import the Loader component
import ContactUsModal from "../FormAndContectForm/ContactUS"; // Import ContactUsModal

function Navbar({ toggleTheme, currentMode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false); // Drawer state
  const [modalOpen, setModalOpen] = useState(false); // Modal state
  const theme = useTheme(); // Get the current theme
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Check if screen size is mobile

  const navLinks = [                         // Ensure this path is correct
    { name: "Home", path: "/" },
    { name: "Service", path: "/service" },  
    { name: "Benefits", path: "/benefits" },
    { name: "About Us", path: "/about" },
  ];

  const handleNavigation = (path) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate(path);
    }, 1500);
  };

  const navbarBackgroundColor =
    currentMode === "dark" ? theme.palette.background.default : theme.palette.text.white;
  const textColor =
    currentMode === "dark"
      ? theme.palette.text.white
      : theme.palette.text.black;

  return (
    <Box>
      {isLoading && <Loader />}

      <AppBar
        position="fixed"
        sx={{
          top: 0,
          backgroundColor: navbarBackgroundColor,
          boxShadow: "none",
          px: { sm: 7 },
        }}
      >
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ height: "40px", marginRight: "16px", cursor: "pointer","&:hover": { transform: "scale(1.05)", transition: "transform 0.3s" } }}
            onClick={() => handleNavigation("/")}
          />

          {/* Links centered */}
          <Box sx={{ display: "flex", justifyContent: "center", flexGrow: 1 }}>
            {!isMobile &&
              navLinks.map((link, index) => (
                <Button
                  key={index}
                  // color="inherit"
                  sx={{
                    textTransform: "none",
                    color:
                      location.pathname === link.path
                        ? theme.palette.primary.main // Active link color (blue)
                        : textColor,
                    "&:hover": {
                      transform: "scale(1.1)", // Zoom-in effect on hover
                      transition: "transform 0.3s ease-in-out", // Smooth transition
                    },
                    margin: "0 16px",
                    fontWeight: 500,
                  }}
                  onClick={() => handleNavigation(link.path)}
                >
                  {link.name}
                </Button>
              ))}
          </Box>

          {/* ContactButton will always be displayed */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <ContactButton
              label="Contact Us"
              // message="Feel free to Contact us anytime!"
              onClick={() => setModalOpen(true)} // Open modal on click
            />
            {/* Dark Mode Button */}
            <IconButton color="inherit" onClick={toggleTheme} sx={{ ml: 1 }}>
              {currentMode === "dark" ? (
                <Brightness7 sx={{ color: textColor }} />
              ) : (
                <Brightness4 sx={{ color: textColor }} />
              )}
            </IconButton>

            {/* Hamburger Menu Icon for mobile */}
            {isMobile && (
              <IconButton
                color="inherit"
                onClick={() => setOpenDrawer(true)}
                sx={{ ml: 1 }}
              >
                <MenuIcon sx={{ color: textColor }} />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }} role="presentation">
          <List>
            {navLinks.map((link, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handleNavigation(link.path);
                  setOpenDrawer(false);
                }}
                sx={{
                  cursor: "pointer",
                }}
              >
                <ListItemText>
                  <Box
                    sx={{
                      textTransform: "none",
                      color:
                        location.pathname === link.path
                          ? theme.palette.primary.main // Active link color (blue)
                          : textColor,
                      "&:hover": {
                        transform: "scale(1.1)", // Zoom-in effect on hover
                        transition: "transform 0.3s ease-in-out", // Smooth transition
                      },
                    }}
                  >
                    {link.name}
                  </Box>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Contact Us Modal */}
      <ContactUsModal
        open={modalOpen} // Control the modal visibility
        handleClose={() => setModalOpen(false)} // Close modal on click outside or button
        currentMode={currentMode} // Pass the theme mode to the modal
      />
    </Box>
  );
}

export default Navbar;
