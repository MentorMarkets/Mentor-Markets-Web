import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Jobs.css';
import { useAuth0 } from '@auth0/auth0-react';
import { getJobs } from '../GetJobs';

const Jobs = () => {

  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = useState(null);

  const [jobsData, setJobsData] = useState()

  useEffect(() => {

    if (user)
      getJobs(user, isAuthenticated, getAccessTokenSilently).then(jobsData => {
        setJobsData(jobsData);
      });

  }, [user?.sub]);

  return <div className="Jobs" data-testid="Jobs">
    
    <h1>Jobs</h1>

    <p>Show available jobs here and charge companies $$$ to advertise.</p>
    
    <h2>All Jobs</h2>
    {JSON.stringify(jobsData)}

    <h2>Manage Your Jobs</h2>
    

  </div>
}

Jobs.propTypes = {};

Jobs.defaultProps = {};

export default Jobs;
