import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import logo from './asset/Telligro.png'

const styles = theme => ({
  root: {
    width: '100%',
    paddingBottom: '10px'
  },
  grow: {
    flexGrow: 1,
  },
  logo: {
    width: '120px',
    height: '60px'
    },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
});


class Header extends Component {
    
    render(){
        const { classes } = this.props;
        return (
          <div className={classes.root}>
            <AppBar position="static">
              <Toolbar>
                <IconButton className={classes.menuButton} aria-label="Open drawer">
                    <img src={logo} className={classes.logo}/>
                </IconButton>
            </Toolbar>
            </AppBar>
          </div>
        );
    }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);