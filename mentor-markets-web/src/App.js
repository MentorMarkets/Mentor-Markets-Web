import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
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
import LoginButton_Auth0 from './components/LoginButton_Auth0/LoginButton_Auth0';
import LogoutButton_Auth0 from './components/LogoutButton_Auth0/LogoutButton_Auth0';
import { useAuth0 } from '@auth0/auth0-react';
import BecomeAMentor from './components/BecomeAMentor/BecomeAMentor';
import Account from './components/Account/Account';
import GetJobs, { foo, getJobs } from './components/GetJobs';

function App() {

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const [jobsData, setJobsData] = useState()

  // useEffect(() => {

  //   if (user)
  //     getJobs(user, isAuthenticated, getAccessTokenSilently).then(jobsData => {
  //       setJobsData(jobsData);
  //     });

  // }, [user?.sub]);

  return (
    <div className="App">
      <header className="App-header">

        <a href='/' className='header-row'>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Pairing On Demand
          </p>
        </a>

      </header>
      <div>
        {LoginLogoutSection(user, isAuthenticated, isLoading, userMetadata)}
      </div>

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
                <Link to="/become-a-mentor">Become A Mentor</Link>
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
              <li>
                <Link to="/account">Account</Link>
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
            <Route path="/account" element={<Account />} />
            <Route path="/become-a-mentor" element={<BecomeAMentor />} />
            <Route path="/map" element={<Map />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

function LoginLogoutSection(user, isAuthenticated, isLoading, userMetadata) {

  // console.table(user)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isAuthenticated)
    return (
      <div>
        <br />
        <div className="profile-row">
          <img className='profile-img' src={user.picture} alt={user.name} />
          <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            <p>{user.sub}</p>
            <h2>User metadata & token(s)</h2>

            <LogoutButton_Auth0></LogoutButton_Auth0>
          </div>
        </div>
      </div>
    )

  return <LoginButton_Auth0></LoginButton_Auth0>

}

export default App;
