import logo from './logo.svg';
import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Home from './components/Home/Home';
import Calendar from './components/Calendar/Calendar';
import Messages from './components/Messages/Messages';
import Meet from './components/Meet/Meet';
import Jobs from './components/Jobs/Jobs';
import Map from './components/Map/Map';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <a href='/' className='header-row'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mentor Markets
          </p>
        </a>

      </header>

      <Router>
        <div>
          <nav>

            <br />
            <ul className='links-row'>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/about">About</Link>
              </li> */}
              <br />
              <li>
                <Link to="/calendar">Call Calendar</Link>
              </li>
              <br />
              <li>
                <Link to="/map">Map</Link>
              </li>
              <br />
              <li>
                <Link to="/messages">Messages</Link>
              </li>
              <br />
              <li>
                <Link to="/messages">Become A Mentor</Link>
              </li>
              <br />
              <li>
                <Link to="/jobs">Jobs</Link>
              </li>
              <br />
              <li>
                <Link to="/meet">Meet</Link>
              </li>
              <br />
              <br />
              {/* 

              TODO 

              <li>
                <Link to="/profile">Users</Link>
              </li>
              <li>
                <Link to="/history">Users</Link>
              </li>
              <li>
                <Link to="/login">Users</Link>
              </li>
              <li>
                <Link to="/sign-up">Users</Link>
              </li>
              <li>
                <Link to="/forgot-password">Users</Link>
              </li>
              */}
            </ul>
            <hr />
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/meet" element={<Meet />} />
            <Route path="/map" element={<Map />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
