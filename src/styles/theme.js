export const theme = {
  colors: {
    primary: {
      green: '#91CB82',
      dark: '#605D5E',
    },
    secondary: {
      yellow: '#F8A170',
      purple: '#0081FE',
      orange: '#FFB199',
    },
    neutral: {
      white: '#fff',
      black: '#111820',
      light: '#999999',
    },
  },
  border: {
    solid: (color) => `0.1rem solid ${color}`,
    radius: '0.25rem',
  },
  opactity: 0.2,
  font: {
    regular: 400,
    normal: 500,
    bold: 700,
    family:
      "Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    sizings: {
      xxsmall: '0.95rem',
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  spacings: {
    xxxsmall: '0.4rem',
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
};
