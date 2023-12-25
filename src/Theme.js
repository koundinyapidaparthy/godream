import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
    palette: {
        primary: {
          main: "#000",
          light: '#888',
        },
        secondary: {
          main: "#454546",
        },
        background:{
            main: 'hsl(240deg 10.53% 92.55%)'
        }
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 768,
          lg: 992,
          xl: 1200,
        },
      },
      scrollbar: {
        '&::-webkit-scrollbar': {
          width: '8px', // Set the width of the scrollbar
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#888', // Set the color of the thumb
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#f1f1f1', // Set the color of the track
        },
        '&::-webkit-scrollbar-track-piece:start': {
          backgroundColor: 'transparent', 
        },
        '&::-webkit-scrollbar-track-piece:end': {
          backgroundColor: 'transparent', 
        },
      }
});


  export default theme;