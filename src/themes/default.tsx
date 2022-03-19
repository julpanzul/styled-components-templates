const dark = {
  title: 'dark',
  // Colors for layout
  colors: {
    primary1: "hsl(204,23.8%,95.9%)",
    background1: "#0F1624",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  }
}

const light = {
  title: 'light',
  // Colors for layout
  colors: {
    primary1: "#000",
    background1: "#eee",
    accent1: "hsl(34.9,98.6%,72.9%)",
    button: "hsl(205.1,100%,36.1%)",
    background2: "hsl(232.7,27.3%,23.7%)",
  }
}

const defaultTheme = {
  // Temp fonts
  fonts: {
    title: "'Roboto', sans-serif",
    main: "'Roboto', sans-serif",
  },
  transition: {
    time: ".25s"
  },
  // Breakpoints for responsive design
  breakpoints: {
    sm: "screen and (min-width: 480px)",
    md: "screen and (min-width: 640px)",
    lg: "screen and (min-width: 960px)",
    xl: "screen and (min-width: 1140px)",
  },
};

export const darkTheme = {...defaultTheme, ...dark}
export const lightTheme = {...defaultTheme, ...light}