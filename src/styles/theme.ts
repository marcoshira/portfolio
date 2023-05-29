export const theme = {
  colors: {
    primaryColor: 'white',
    secondaryColor: '#1d1d20',
    hoverColor: '#ef626c',
  },
  font: {
    family: {
      default: "'Montserrat-Regular', sans-serif",
    },
    sizes: {
      xsmall: '0.8rem',
      small: '1.6rem',
      ltmedium: '2rem',
      medium: '2.4rem',
      large: '3.2rem',
      xlarge: '4.0rem',
      xxlarge: '4.8rem',
      huge: '5.6rem',
      xhuge: '6.4rem',
    },
  },
  media: {
    lteMedium: '(max-width: 768px)',
    lteSmall: '(max-width: 440px)',
  },
  spacings: {
    xsmall: '0.8rem',
    small: '1.6rem',
    medium: '2.4rem',
    large: '3.2rem',
    xlarge: '4.0rem',
    xxlarge: '4.8rem',
    huge: '5.6rem',
    xhuge: '6.4rem',
  },
} as const;
