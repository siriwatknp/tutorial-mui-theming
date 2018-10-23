import withStyles from '@material-ui/core/styles/withStyles';

const color = 'rgba(255, 255, 255, 0.7)';

const activeColor = '#4fc3f7';

export default withStyles(theme => ({
  drawer: {
    background: '#19212b',
    '& *': {
      color,
    },
  },
  list: {
    padding: 0,
    '& svg': {
      fontSize: 20,
    },
  },
  item: {
    '&:hover': {
      background: 'rgba(255,255,255,.08)',
    },
    paddingTop: 6,
    paddingBottom: 6,
  },
  activeItem: {
    '& *': {
      color: activeColor,
    },
  },
  header: {
    background: '#262f3d',
    borderBottom: '1px solid #404854',
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
    '&$textDense': {
      fontSize: 14,
      fontWeight: 500,
    },
  },
  textDense: {},
}));
