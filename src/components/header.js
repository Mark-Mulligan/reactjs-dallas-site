// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import ReactLogoSvg from '../images/react-logo.svg';
import './header.css';

// Local Variables
const propTypes = {
  classes: PropTypes.shape({
    link: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    nav: PropTypes.string.isRequired,
    root: PropTypes.string.isRequired,
  }).isRequired,
};

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  logo: {
    height: 24,
    marginRight: 8,
    transform: 'translateY(6px)',
    width: 24,
  },
  nav: {
    alignItems: 'baseline',
    fontFamily: 'Roboto',
    margin: '0 auto',
    maxWidth: 960,
    padding: '1rem',
  },
  navItem: {
    textAlign: 'center'
  },
  root: {
    background: '#20232A',
  },
};

// Component Definition
const Header = ({ classes, siteTitle }) => (
  <div className={classes.root}>
    <div className={`${classes.nav} nav-items-wrapper`}>
      <div className={classes.navItem}>
        <Link
          className={classes.link}
          to="/"
        >
          <ReactLogoSvg className={classes.logo} /> {siteTitle}
        </Link>
      </div>
      <div className={classes.navItem}>
        <Link
          className={classes.link}
          to="/events"
        >
          Events
        </Link>
      </div>
      <div className={classes.navItem}>
        <Link
          className={classes.link}
          to="/backers"
        >
          Backers
        </Link>
      </div>
    </div>
  </div>
);

Header.propTypes = propTypes;

export default withStyles(styles)(Header);
