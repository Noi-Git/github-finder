import React from 'react';
import './Navbar.css';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {
  return (
    <div className="nav">
      <h1 className="container">
        <i className={icon} aria-hidden="true"></i> {title}
      </h1>
    </div>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fa fa-pie-chart'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
