import React from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';

const Calendar = () => (
  <div className="Calendar" data-testid="Calendar">

    <h1>Call Calendar</h1>

    <p>Book a video, audio, and screenshare call with a mentor!</p>


    <p><i>
      Note: choosing from the dropdowns here should filter the available mentors in the calendar area._
    </i></p>

    <br/>

    Mentoring subject:
    <select name="mentoring-subject" id="mentoring-subject-select">
      <option value="">--Please choose a market--</option>
      <option value="dog">Coding / Software Development</option>
      <option value="cat">Finance & Investing</option>
      <option value="hamster">Personal Development</option>
      <option value="parrot">Sports & Exercise</option>
    </select>

    <br/>
    <br/>
    Mentoring subcategory:
    <select name="mentoring-subcategory" id="mentoring-subcategory-select">
      <option value="">--Please choose a subcategory--</option>
      <option value="dog">Algorithms practice - JavaScript / TypeScript</option>
      <option value="dog">Algorithms practice - Python</option>
      <option value="dog">Algorithms practice - Rust</option>
      <option value="dog">Blockers Help - Frontend Web Development</option>
      <option value="dog">Blockers Help - Database Troubles</option>
      <option value="dog">Software Architecture and Planning</option>
      <option value="dog">Performance Optimization</option>
      <option value="dog">Unit Testing & TDD</option>
      <option value="dog">Getting a Coding Job Advice / Critique</option>
    </select>

    <br/>
    <br/>
    <hr />

    <h1>Mentors Available</h1>


    ${`< --  - - - - - - - - - - - - -- - - - - - -- - - - - -- - - - - - - - - - >`}
    <br />
    <br />
    ${'$10/hour _______________________  $40/hour _______________________ $150/hour'}

    <br />
    <br />

    ^ Show a price spectrum of available mentors, also filtered by select inputs.

    <br />
    <br />
    <br />

    <div>

      <h3>[Calendar Section]</h3>

      <p>Users will be able to view calendar in month, week, or day view.</p>
      <p>Clicking on mentor availability allows user to book that time (opens new popup / window / page).</p>
    </div>


  </div>

);

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
