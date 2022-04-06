import React from 'react';
import PropTypes from 'prop-types';
import './Meet.css';

const Meet = () => (
  <div className="Meet" data-testid="Meet">

    <h1>Meet</h1>

    <p>Meet with your mentor here!</p>

    <video width="90%" height="auto" controls>
      <source src="https://www.youtube.com/watch?v=5NZzP6BK9hs" type="video/mp4" />
      {/* <source src="movie.ogg" type="video/ogg"> */}
      Your browser does not support the video tag.
    </video>

  </div>
);

Meet.propTypes = {};

Meet.defaultProps = {};

export default Meet;
