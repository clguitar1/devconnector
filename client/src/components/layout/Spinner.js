import spinner from './spinner.gif';
import React, { Fragment } from 'react';

const Spinner = () => {
  return (
    <div>
      <Fragment>
        <img
          src={spinner}
          alt='Loading...'
          style={{ width: '200px', margin: 'auto', display: 'block' }}
        />
      </Fragment>
    </div>
  );
};

export default Spinner;
