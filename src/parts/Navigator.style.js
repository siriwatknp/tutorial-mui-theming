import withStyles from '@material-ui/core/styles/withStyles';

const color = 'rgba(255, 255, 255, 0.7)';

const activeColor = '#4fc3f7';

const dividerColor = '#404854';

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
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2,
  },
  activeItem: {
    '& *': {
      color: activeColor,
    },
  },
  header: {
    background: '#262f3d',
    boxShadow: `inset 0 -1px ${dividerColor}`,
  },
  unPaddedRight: {
    paddingRight: 0,
  },
  firebaseHeader: {
    marginLeft: theme.spacing.unit,
  },
  smallIcon: {
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    borderLeft: `1px solid ${dividerColor}`,
    borderRadius: 0,
    '&:hover': {
      background: 'none',
    },
  },
  itemIcon: {
    margin: 0,
  },
  categoryHeader: {
    paddingTop: 20,
    paddingBottom: theme.spacing.unit * 2,
  },
  categoryHeaderText: {
    fontSize: 15,
    fontWeight: 500,
    color: theme.palette.common.white,
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
  divider: {
    marginTop: theme.spacing.unit * 2,
    background: dividerColor,
  },
}));
