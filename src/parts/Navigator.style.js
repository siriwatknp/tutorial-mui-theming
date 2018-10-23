import withStyles from '@material-ui/core/styles/withStyles';

const color = 'rgba(255, 255, 255, 0.7)';

export default withStyles(theme => ({
  list: {
    padding: 0,
  },
  header: {
    background: '#262f3d',
    borderBottom: '1px solid #404854',
    '& *': {
      color,
    },
  },
  smallIcon: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    borderLeft: `1px solid #404854`,
    borderRadius: 0,
    '& svg': {
      width: 20,
      height: 20,
    },
    '&:hover': {
      background: 'none',
    },
  },
}));
