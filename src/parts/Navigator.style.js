import withStyles from '@material-ui/core/styles/withStyles';

const color = 'rgba(255, 255, 255, 0.7)';

export default withStyles({
  header: {
    background: '#262f3d',
    borderBottom: '1px solid #404854',
    '& *': {
      color,
    },
  },
});
