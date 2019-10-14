const THEME = {
  palette: {
    primary: {
      main: "#4042ff",
      dark: "#0002d9",
      darker: "#000173",
      gradient: "linear-gradient(90deg, #4042ff 0%, #0002d9  100%)"
    },
    secondary: {
      main: "#3fc3eb"
    },
    white: {
      main: "#fff",
      light: "#eee",
      dark: "#efefef"
    },
    black: {
      main: "#232323",
      gradient:
        "linear-gradient(135deg, rgba(44,44,44,1) 0%, rgba(31,31,31,1) 100%)"
    },
    grey: {
      main: "#a0a0a0",
      dark: "#565656"
    }
  },
  typography: {
    primary: "Karla, Helvetica, Verdana, sans-serif",
    secondary: "Nunito, Helvetica, Verdana, sans-serif",
    color: "#757575"
  },
  breakpoints: {
    lg: 1260,
    md: 991,
    sm: 768,
    xs: 520
  },
  spacing: function(num) {
    return `${num * 10}px`;
  }
};

export default THEME;
