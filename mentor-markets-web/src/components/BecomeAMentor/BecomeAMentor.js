import React from 'react';
import PropTypes from 'prop-types';
import './BecomeAMentor.css';

const greens = ['iceberg', 'romaine', 'spinach', 'arugula']

const rices = ['white rice', 'brown rice', 'lentils', 'cauliflower rice']

const proteins = ['steak', 'grilled chicken', 'buffalo chicken', 'sweet potatoes', 'felafel']

const BecomeAMentor = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    Array.from(event.target.elements).forEach(element => {
      console.log(element.name + ': ' + element.value);
    })
  }

  return <div className="BecomeAMentor" data-testid="BecomeAMentor">

    <h1>Become A Mentor</h1>
    <p>Apply up to be a mentor here!</p>

    {/* <h2>Salad Builder</h2>
    <form onSubmit={handleSubmit}>
      
      <label>{`Greens: `}</label>
      <select name='greens'>
        {greens.map(green => <option value={green} name={green}>{green}</option>)}
      </select>
      
      <br/>
      <br/>
      
      <label>{`Rice: `}</label>
      <select name='rice'>
        {rices.map(rice => <option value={rice} name={rice}>{rice}</option>)}
      </select>

      <br/>
      <br/>

      <label>{`Protein: `}</label>
      <select name='protein'>
        {proteins.map(protein => <option value={protein} name={protein}>{protein}</option>)}
      </select>

      <br/>
      <br/>

      <input type="submit" value="Submit" />

    </form> */}


    <br />
    <p><i>Note: You must submit a separate application for each specific subcategory you wish to mentor.</i></p>

    <br />
    <br />
    <form onSubmit={handleSubmit}>

      <label>{`Subject: `}</label>
      <select name='subject'>
        <option value="" disabled selected>Select a mentoring subject</option>
        {rices.map(rice => <option value={rice} name={rice}>{rice}</option>)}
      </select>

      <br />
      <br />
      <label>{`Subcategory: `}</label>
      <select name='subject'>
        <option value="" disabled selected>Select a mentoring subcategory</option>
        {rices.map(rice => <option value={rice} name={rice}>{rice}</option>)}
      </select>
      <br />
      <br />
      <label>{`Approximate Availability`}</label>
      <label>{`(hours per week)`}</label>
      <br />
      {/* <select name='subject'>
        {rices.map(rice => <option value={rice} name={rice}>{rice}</option>)}
      </select> */}
      <input type="number" min='1' max='100'/>

      <br />
      <br />
      <label>{`Your Name: `}</label>
      {/* <select name='mentorName'>
        {greens.map(green => <option value={green} name={green}>{green}</option>)}
      </select> */}

      <input type="text"></input>

      <br />
      <br />

      <label>{`Hourly Rate: `}</label>
      {/* <select name='rice'>
        {rices.map(rice => <option value={rice} name={rice}>{rice}</option>)}
      </select> */}
      $<input type="number" min='1' max='1000'/>

      <br />
      <br />

      <input type="submit" value="Submit" />

    </form>

  </div>

}

BecomeAMentor.propTypes = {};

BecomeAMentor.defaultProps = {};

export default BecomeAMentor;
