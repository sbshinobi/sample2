import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  FormHelperText,
} from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import CloseIcon from "@mui/icons-material/Close";
import useTheme from "../theme"; // Import your custom theme
// import AOS from "aos";
// import "aos/dist/aos.css";

const ScheduleAppointmentModal = ({ open, onClose, currentMode }) => {
  const [appointmentDate, setAppointmentDate] = useState(null);
  const [appointmentTime, setAppointmentTime] = useState(null);
  const [doctor, setDoctor] = useState("");
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({
    appointmentDate: "",
    appointmentTime: "",
    doctor: "",
  });

  const theme = useTheme(); // Custom theme hook

  // Reset form fields when modal is closed
  const handleModalClose = () => {
    setAppointmentDate(null);
    setAppointmentTime(null);
    setDoctor("");
    setNotes("");
    setErrors({
      appointmentDate: "",
      appointmentTime: "",
      doctor: "",
    });
    onClose(); // Close the modal
  };

  const handleSubmit = () => {
    // Form validation
    let valid = true;
    const newErrors = {
      appointmentDate: "",
      appointmentTime: "",
      doctor: "",
    };

    if (!appointmentDate) {
      newErrors.appointmentDate = "Appointment date is required";
      valid = false;
    }
    if (!appointmentTime) {
      newErrors.appointmentTime = "Appointment time is required";
      valid = false;
    }
    if (!doctor) {
      newErrors.doctor = "Doctor selection is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle form submission (e.g., call an API to save the appointment)
      console.log("Appointment Scheduled:", {
        appointmentDate,
        appointmentTime,
        doctor,
        notes,
      });
      handleModalClose(); // Close and reset the form after submission
    }
  };

  // Initialize AOS for animations when the component mounts
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     easing: "ease-in-out",
  //     once: true,
  //   });
  // }, []);

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: currentMode === "light" ? theme.palette.background.paper : theme.palette.background.default,
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
        }}
      >
        <IconButton
          onClick={handleModalClose}
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
            color: currentMode === "light" ? theme.palette.text.black : theme.palette.text.white,
          }}
          // data-aos="fade-up" // Removed animation
          // data-aos-delay="200" // Removed animation delay
        >
          <CloseIcon />
        </IconButton>

        <Typography
          variant="h6"
          gutterBottom
          sx={{ color: currentMode === "light" ? theme.palette.text.black : theme.palette.text.white }}
          // data-aos="fade-up" // Removed animation
          // data-aos-delay="300" // Removed animation delay
        >
          Schedule an Appointment
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Grid container spacing={2}>
            {/* Appointment Date */}
            <Grid item xs={12}>
              <DesktopDatePicker
                label="Appointment Date"
                sx={{
                  width: "100%",
                  color: currentMode === "light" ? theme.palette.text.black : theme.palette.text.white,
                }}
                inputFormat="MM/DD/YYYY"
                value={appointmentDate}
                onChange={setAppointmentDate}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={Boolean(errors.appointmentDate)}
                    helperText={errors.appointmentDate}
                    sx={{
                      "& .MuiInputBase-root": {
                        padding: "12px", // Uniform padding
                      },
                    }}
                  />
                )}
              />
            </Grid>

            {/* Appointment Time */}
            <Grid item xs={12}>
              <TimePicker
                label="Appointment Time"
                sx={{ width: "100%" }}
                value={appointmentTime}
                onChange={setAppointmentTime}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    error={Boolean(errors.appointmentTime)}
                    helperText={errors.appointmentTime}
                    sx={{
                      "& .MuiInputBase-root": {
                        padding: "12px", // Uniform padding
                      },
                    }}
                  />
                )}
              />
            </Grid>

            {/* Select Doctor */}
            <Grid item xs={12}>
              <FormControl fullWidth error={Boolean(errors.doctor)}>
                <InputLabel id="doctor-select-label">Doctor</InputLabel>
                <Select
                  labelId="doctor-select-label"
                  id="doctor-select"
                  value={doctor}
                  label="Doctor"
                  onChange={(e) => setDoctor(e.target.value)}
                  sx={{
                    "& .MuiInputBase-root": {
                      padding: "12px", // Uniform padding
                    },
                  }}
                >
                  <MenuItem value="Dr. Smith">Dr. Smith</MenuItem>
                  <MenuItem value="Dr. Johnson">Dr. Johnson</MenuItem>
                  <MenuItem value="Dr. Lee">Dr. Lee</MenuItem>
                </Select>
                {errors.doctor && <FormHelperText>{errors.doctor}</FormHelperText>}
              </FormControl>
            </Grid>

            {/* Notes */}
            <Grid item xs={12}>
              <TextField
                label="Notes"
                multiline
                rows={4}
                fullWidth
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                sx={{
                  "& .MuiInputBase-root": {
                    padding: "12px", // Uniform padding
                  },
                }}
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12} textAlign="center">
              <Button
                variant="contained"
                onClick={handleSubmit}
                sx={{
                  bgcolor: theme.palette.primary.main,
                  color: theme.palette.getContrastText(theme.palette.primary.main),
                  "&:hover": {
                    bgcolor: theme.palette.primary.dark,
                  },
                  width: "100%", // Ensure button takes full width
                  padding: "12px", // Same padding for button
                }}
              >
                Schedule Appointment
              </Button>
            </Grid>
          </Grid>
        </LocalizationProvider>
      </Box>
    </Modal>
  );
};

export default ScheduleAppointmentModal;
