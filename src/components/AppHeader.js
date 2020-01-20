import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar'; 



const AppHeader = ({ title }) => {
    return (
          <AppBar position="sticky">
              <Toolbar>
              <Typography title='title' color='inherit'>
              {title}
              </Typography>
            </Toolbar>
            </AppBar>
    );
};

AppHeader.propTypes = {
    title: PropTypes.string.isRequired,
};

export default AppHeader;