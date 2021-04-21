// External Dependencies
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { withStyles } from '@material-ui/core/styles';

// Internal Dependencies
import ReactLogoSvg from '../images/react-logo.svg';

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
    display: 'grid',
    gridTemplateColumns: '33% 33% 33%',
    '@media (max-width: 512px)': {
      display: 'flex',
      justifyContent: 'space-around'
    },
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
