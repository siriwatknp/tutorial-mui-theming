import withStyles from '@material-ui/core/styles/withStyles';

const color = 'rgba(255, 255, 255, 0.7)';

export default withStyles(theme => ({
  list: {
    padding: 0,
    '& svg': {
      fontSize: 20,
    },
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
    '&:hover': {
      background: 'none',
    },
  },
  itemIcon: {
    margin: 0,
  },
  itemText: {
    fontSize: 14,
    fontWeight: 500,
  },
}));
