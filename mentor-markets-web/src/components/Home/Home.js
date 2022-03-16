import React from 'react';
import PropTypes from 'prop-types';
import './Home.css';

const Home = () => (
  <div className="Home" data-testid="Home">
    
    <h1>Dashboard</h1>

    <hr/>

    <ul>
      <li><h2>My Upcoming Meetings</h2></li>
      <li><h2>Mentors Recommended for Me</h2></li>
      <li><h2>New Messages</h2></li>
      <li><h2>New Jobs Posted</h2></li>
    </ul>

  </div>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
