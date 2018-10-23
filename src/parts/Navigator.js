import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// COMPONENTS
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider'

// ICONS
import Settings from '@material-ui/icons/Settings';
import Home from '@material-ui/icons/Home';
import People from '@material-ui/icons/People';
import DnsRounded from '@material-ui/icons/DnsRounded';
import PermMediaOutlined from '@material-ui/icons/PermMediaOutlined';
import Public from '@material-ui/icons/Public';
import SettingsEthernet from '@material-ui/icons/SettingsEthernet';
import SettingsInputComponent from '@material-ui/icons/SettingsInputComponent';
import Dashboard from '@material-ui/icons/Dashboard';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import PhonelinkSetup from '@material-ui/icons/PhonelinkSetup';

// STYLES
import withNavigatorStyles from './Navigator.style';

const categories = [
  {
    id: 'Develop',
    children: [
      { id: 'Authentication', icon: <People />, active: true },
      { id: 'Database', icon: <DnsRounded /> },
      { id: 'Storage', icon: <PermMediaOutlined /> },
      { id: 'Hosting', icon: <Public /> },
      { id: 'Functions', icon: <SettingsEthernet /> },
      { id: 'ML Kits', icon: <SettingsInputComponent /> },
    ],
  },
  {
    id: 'Quality',
    children: [
      { id: 'Crashlytics', icon: <SettingsApplications /> },
      { id: 'Performance', icon: <Dashboard /> },
      { id: 'Test Lab', icon: <PhonelinkSetup /> },
    ],
  },
];

const Navigator = ({ classes }) => (
  <Drawer
    variant="permanent"
    classes={{ paper: cx('navigator', classes.drawer) }}
  >
    <List className={classes.list}>
      <ListItem className={classes.header}>
        <ListItemIcon className={classes.itemIcon}>
          <img
            alt={'logo'}
            className={'firebase-logo'}
            src={
              'https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png'
            }
          />
        </ListItemIcon>
        <img
          alt={'label'}
          className={cx('firebase-label', classes.firebaseHeader)}
          src={
            'https://www.gstatic.com/mobilesdk/160323_mobilesdk/images/firebase_logotype_white_18dp.svg'
          }
        />
      </ListItem>
      <ListItem className={cx(classes.header, classes.unPaddedRight)}>
        <ListItemIcon className={classes.itemIcon}>
          <Home />
        </ListItemIcon>
        <ListItemText classes={{ primary: classes.itemText }}>
          Project Overview
        </ListItemText>
        <IconButton disableRipple className={classes.smallIcon}>
          <Settings />
        </IconButton>
      </ListItem>
      {categories.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.categoryHeader}>
            <ListItemText
              classes={{
                primary: classes.categoryHeaderText,
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ id: childId, icon, active }) => (
            <ListItem
              button
              dense
              key={childId}
              className={cx(classes.item, active && classes.activeItem)}
            >
              <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
              <ListItemText
                classes={{
                  primary: classes.itemText,
                  textDense: classes.textDense,
                }}
              >
                {childId}
              </ListItemText>
            </ListItem>
          ))}
          <Divider className={classes.divider} />
        </React.Fragment>
      ))}
    </List>
  </Drawer>
);

Navigator.propTypes = {
  classes: PropTypes.shape({}).isRequired,
};

export default withNavigatorStyles(Navigator);
