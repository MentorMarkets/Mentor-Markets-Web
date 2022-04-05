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

    <h2>Salad Builder</h2>
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

    </form>

  </div>

}

BecomeAMentor.propTypes = {};

BecomeAMentor.defaultProps = {};

export default BecomeAMentor;
