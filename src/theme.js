import { createTheme } from '@mui/material/styles';
import '@fontsource/inter';  // Import Inter font

// Define a function to create a theme that supports dark mode
const Theme = (mode = 'light') => {
  const palette = {
    light: {
      primary: {
        main: '#199ED3', // Vivid Sky Blue
        light: '#33B8E5',
        dark: '#137A9D',
      },
      secondary: {
        main: '#15634C', // Tropical Rainforest color
        light: '#298F6D',
        dark: '#104F3A',
      },
      background: {
        default: '#575352', // Blue
        paper: '#ffffff',
      },
      text: {
        primary: '#D73030', // Dark text for readability
        secondary: '#757575',
        white: '#ffffff',
        black: '#000',
      },
      error: {
        main: '#D32F2F', // Red for errors
      },
      success: {
        main: '#388E3C', // Green for success messages
      },
    },
    dark: {
      primary: {
        main: '#33B8E5', // Lighter Blue for dark mode
        light: '#199ED3',
        dark: '#0A7F9B',
      },
      secondary: {
        main: '#298F6D', // Lighter Green for dark mode
        light: '#15634C',
        dark: '#104F3A',
      },
      background: {
        default: '#121212', // Dark background
        paper: '#1D1D1D', // Dark paper color
      },
      text: {
        primary: '#FFFFFF', // White text for dark mode
        secondary: '#B0B0B0', // Light gray for secondary text
        white: '#ffffff',
        black: '#000',
      },
      error: {
        main: '#D32F2F', // Red for errors
      },
      success: {
        main: '#388E3C', // Green for success messages
      },
    },
  };

  // Select the palette based on mode
  const selectedPalette = mode === 'dark' ? palette.dark : palette.light;

  return createTheme({
    palette: {
      mode,
      ...selectedPalette,
    },

    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: '3.5rem',
        fontWeight: 700,
        lineHeight: 1.2,
        color: mode === 'dark' ? '#FFFFFF' : '#212121', // Adjust color for dark mode
        '@media (max-width:600px)': {
          fontSize: '2.5rem',
        },
      },
      h2: {
        fontSize: '2.75rem',
        fontWeight: 600,
        lineHeight: 1.3,
        color: mode === 'dark' ? '#FFFFFF' : '#212121', // Adjust color for dark mode
        '@media (max-width:600px)': {
          fontSize: '2rem',
        },
      },
      h3: {
        fontSize: '2.25rem',
        fontWeight: 500,
        lineHeight: 1.4,
        color: mode === 'dark' ? '#FFFFFF' : '#212121', // Adjust color for dark mode
        '@media (max-width:600px)': {
          fontSize: '1.75rem',
        },
      },
      body1: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.6,
        color: mode === 'dark' ? '#B0B0B0' : '#757575', // Adjust body text color for dark mode
        '@media (max-width:600px)': {
          fontSize: '0.95rem',
        },
      },
      body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.5,
        color: mode === 'dark' ? '#B0B0B0' : '#757575', // Adjust body text color for dark mode
        '@media (max-width:600px)': {
          fontSize: '0.8rem',
        },
      },
    },

    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '8px',
            padding: '10px 20px',
            fontSize: '0.875rem',
            '@media (max-width:600px)': {
              padding: '8px 16px',
              fontSize: '0.8rem',
            },
          },
          containedPrimary: {
            backgroundColor: mode === 'dark' ? '#388E3C' : '#FF6F61', // Darker button color
            '&:hover': {
              backgroundColor: mode === 'dark' ? '#2F7030' : '#C64E3A', // Darker shade on hover
            },
          },
          outlined: {
            borderColor: mode === 'dark' ? '#388E3C' : '#FF6F61',
            color: mode === 'dark' ? '#388E3C' : '#FF6F61',
            '&:hover': {
              borderColor: mode === 'dark' ? '#2F7030' : '#C64E3A',
              backgroundColor: mode === 'dark' ? '#263D26' : '#FFEBEE',
            },
          },
        },
      },

      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
            backgroundColor: mode === 'dark' ? '#121212' : '#FAFAFA', // Background color based on mode
            color: mode === 'dark' ? '#B0B0B0' : '#212121', // Text color based on mode
            '@media (max-width:600px)': {
              padding: '0 0px',
            },
          },
        },
      },
    },

    // Shape and breakpoints are the same for both light and dark modes
    shape: {
      borderRadius: 8,
    },

    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  });
};

export default Theme;
