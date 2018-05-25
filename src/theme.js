const baseStyles = {
  padding: 20,
};

export const themeStyles = {
  body: {
    padding: baseStyles.padding,
    fontFamily: 'serif',
  },
  paper: {
    padding: baseStyles.padding,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    margin: 20,
  },
  colors: {
    black: '#000',
    white: '#fff',
    greyText: '#959595',
    grey: '#6d7176',
    greyDark: '#53565a',
    green: '#5c8018',
    greenNew: '#083',
    greenLight: '#7e984a',
    greenLime: '#b7bf10',
    red: '#c0002b',
    redError: '#d0021b',
  }
}

// const color = waitroseStyles.colors;

export default {
  palette: {
    primary: {
      light: themeStyles.colors.white,
      contrastText: themeStyles.colors.white,
      main: themeStyles.colors.red
    },
    secondary: {
      light: themeStyles.colors.white,
      contrastText: themeStyles.colors.white,
      main: themeStyles.colors.red
    },
    appBar: {
      height: 200,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    button: {
      margin: 20,
      height: 50,
    },
    waitrosePaper: {
      backgroundColor: '#083'
    }
  }
};
