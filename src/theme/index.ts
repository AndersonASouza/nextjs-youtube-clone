import { colors, createTheme } from '@material-ui/core'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: colors.common.white,
      //   dark: '#f4f6f8',
      paper: colors.common.white,
    },
    primary: {
      main: '#f44336',
    },
    secondary: {
      main: '#3ea6ff',
    },
    error: {
      main: red.A400,
    },
  },
})

export default theme
