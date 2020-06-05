/**
 *
 * @summary Global utitils and constants
 * @description  Any useful utility or constant which can be used globally
 * @author Gareth Perry <garethnperry@gmail.com>
 *
 * @version 1.0.0 (June 2020)
 */

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
