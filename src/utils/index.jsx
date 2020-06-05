const defaultTheme = {
  // Colours
  primary: 'white',
  secondary: 'black',


  font_family: "'Baloo Chettan 2', cursive;",
  font_family_alt: 'Oxanium',
};

function tryTheme(props, key) {
  const theme = props.theme || defaultTheme;
  return theme[key] || key;
}

export { tryTheme, defaultTheme };
