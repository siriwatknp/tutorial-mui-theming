import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      outlinedPrimary: {
        borderWidth: 1.5,
        '&:hover': {
          borderWidth: 1.5,
        }
      }
    }
  }
})

export default theme