import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calendar.css';
import Timeline from 'react-calendar-timeline';
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css';
import moment from 'moment';

const groups = [{ id: 1, title: 'Jim Lynch' }, { id: 2, title: 'Parth Patel' }, { id: 3, title: `Johnny Mc'Foobar` }]

const items = [
  {
    id: 1,
    group: 1,
    title: 'Jim Lynch',
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: 'Parth Patel',
    start_time: moment().add(-0.5, 'hour'),
    end_time: moment().add(0.5, 'hour')
  },
  {
    id: 3,
    group: 1,
    title: `Johnny Mc'Foobar`,
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }
]

const subjects = [
  'Software Development',
  'Finance & Investing',
  'Personal Development',
  'Sports & Exercise'
]

const subcategories = {
  'Software Development': ['TypeScript', 'Python', 'Interviewing'],
  'Finance & Investing': ['Long-Term Investing', 'Accounting', 'Taxes', 'Crypto', 'Options'],
  'Personal Development': ['Mental Health', 'Stress & Anxiety', 'Anger Management', 'Trauma Counseling'],
  'Sports & Exercise': ['Weightligting', 'Personal Nutrition', 'Weight Loss']

}

const Calendar = () => {

  const [selectedSubject, setSelectedSubject] = React.useState();
  const [selectedSubcategory, setSelectedSubcategory] = useState();


  return <div className="Calendar" data-testid="Calendar">

    <div className='debug-panel'>

      <p>Selected Mentoring Subject: {selectedSubject}</p>
      <p>Selected Mentoring Subcategory: {selectedSubcategory}</p>

    </div>

    <h1>Call Calendar</h1>

    <p>Book a video, audio, and screenshare call with a mentor here!</p>
    <p>Select a subject to get started!</p>

    <br />

    <label>
      {`Mentoring subject:  `}
    </label>
    <select name="mentoring-subject" id="mentoring-subject-select"
      value={selectedSubject}
      onChange={e => setSelectedSubject(e.currentTarget.value)}
    >
      {subjects.map(subject => {
        return <option value={subject}>{subject}</option>
      })}
    </select>

    <br />
    <br />
    <br />

    {
      selectedSubject && <div>

        <label>
          {`Mentoring subcategory  `}
        </label>
        <select name="mentoring-subcategory"
          id="mentoring-subcategory-select"
          value={selectedSubcategory}
          onChange={e => setSelectedSubcategory(e.currentTarget.value)}
        >
          {subcategories[selectedSubject].map(subcategory => {
            return <option value={subcategory}>{subcategory}</option>
          })}
        </select>

        <br />
        <br />
        <br />
        <hr />

        {selectedSubcategory &&

          <div>

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

            <div className='calendar-container'>

              <h2>Book A Mentoring Session</h2>

              <br />

              <p>
                The time table below shows availablities of mentors that match what you're looking for!
              </p>
            </div>

            <br />
            <div className='calendar-container'>

              <Timeline
                groups={groups}
                items={items}
                defaultTimeStart={moment().add(-12, 'hour')}
                defaultTimeEnd={moment().add(12, 'hour')}
              />


            </div>
          </div>}

      </div>

    }
  </div>

}

Calendar.propTypes = {};

Calendar.defaultProps = {};

export default Calendar;
