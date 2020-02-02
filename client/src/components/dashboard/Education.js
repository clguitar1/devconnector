import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile.actions';
import { Table, Button } from 'reactstrap';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map(edu => (
    <tr key={edu.id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        <Moment format='YYYY/MM/DD'>{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Now'
        ) : (
          <Moment format='YYYY/MM/DD'>{edu.to}</Moment>
        )}
      </td>
      <td>
        <Button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'
        >
          Delete
        </Button>
      </td>
    </tr>
  ));

  return (
    <div className='Education-table'>
      <h2 className='my-4'>Education Credentials</h2>
      <Table>
        <thead>
          <tr>
            <th>School</th>
            <th>Degree</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>{educations}</tbody>
      </Table>
    </div>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
