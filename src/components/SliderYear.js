import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Slider, { sliderClasses } from '@mui/material/Slider';

const finalTheme = createTheme({
  components: {
    MuiSlider: {
      styleOverrides: {
        valueLabel: ({ ownerState, theme }) => ({
          ...(ownerState.orientation === 'vertical' && {
            backgroundColor: 'transparent',
            color: theme.palette.grey[500],
            fontWeight: 700,
            padding: 0,
            left: '2rem',
          }),
          [`&.${sliderClasses.valueLabelOpen}`]: {
            transform: 'none',
            top: 'initial',
          },
        }),

      },
    },
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function SliderYear(props) {

  return (
    <ThemeProvider theme={finalTheme}>
      <Box sx={{ height: 400, margin: 'auto', display: 'flex', justifyContent: 'center', padding: '25px' }}>
        <Slider
          getAriaLabel={() => 'Year'}
          sx={{color: "#646dc8"}}
          orientation="vertical"
          getAriaValueText={valuetext}
          defaultValue={[1894, 2020]}
          min={1894}
          max={2020}
          marks={[
            { value: 1894 },
            { value: 1925 },
            { value: 1957 },
            { value: 1989 },
            { value: 2020 },
          ]}
          valueLabelFormat={valuetext}
          valueLabelDisplay="on"
          onChange={(e) => {props.changeYears(e.target.value)}}
        />
      </Box>
    </ThemeProvider>
  );
}