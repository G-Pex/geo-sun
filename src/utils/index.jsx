const defaultTheme = {
  // Colours
  primary: 'white',
  secondary: 'black',

  font_family: "'Raleway', sans-serif",
};

function tryTheme(props, key) {
  const theme = props.theme || defaultTheme;
  return theme[key] || key;
}

export { tryTheme, defaultTheme };
