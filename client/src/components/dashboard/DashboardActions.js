import React from 'react';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='dash-buttons'>
      <Link to='/edit-profile' className='btn btn-light mr-2'>
        <i className='fas fa-user-circle text-info'></i> Edit Profile
      </Link>
      <Link to='/add-experience' className='btn btn-light mr-2'>
        <i className='fas fa-vlack-tie text-info'></i> Add Experience
      </Link>
      <Link to='/add-education' className='btn btn-light'>
        <i className='fas fa-graduation-cap text-info'></i> Add Education
      </Link>
    </div>
  );
};

export default DashboardActions;
