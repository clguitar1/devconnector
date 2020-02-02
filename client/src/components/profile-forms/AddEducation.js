import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../actions/profile.actions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddEducation = ({ addEducation, history }) => {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    school,
    degree,
    fieldofstudy,
    from,
    to,
    current,
    description
  } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // pass in the history object so we can redirect in profile.actions.js
    addEducation(formData, history);
  };

  return (
    <div className='Education-form mb-5'>
      <h1 className='text-info'>Add an Education</h1>
      <p>
        <i className='fas fa-user mr-2'></i> Add any schools or bootcamp you
        have attended
      </p>
      <small>* = required field</small>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type='text'
            name='school'
            value={school}
            onChange={onChange}
            placeholder='* School or bootcamp'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='degree'
            value={degree}
            onChange={onChange}
            placeholder='* Degree or Certificate'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='fieldofstudy'
            value={fieldofstudy}
            onChange={onChange}
            placeholder='Field of study'
          />
        </FormGroup>
        <FormGroup>
          <Label>From</Label>
          <Input type='date' name='from' value={from} onChange={onChange} />
        </FormGroup>
        <FormGroup>
          <Input
            type='checkbox'
            name='current'
            value={current}
            onChange={e => {
              setFormData({ ...formData, current: !current });
              toggleDisabled(!toDateDisabled);
            }}
          />{' '}
          Current job
        </FormGroup>
        <FormGroup>
          <Label>To</Label>
          <Input
            type='date'
            name='to'
            value={to}
            onChange={onChange}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='textarea'
            name='description'
            value={description}
            onChange={onChange}
            placeholder='Program description'
          />
        </FormGroup>

        <div className='mt-3'>
          <Button className='btn btn-info' type='submit'>
            Submit
          </Button>
          <Link to='/dashboard' className='btn btn-light ml-3'>
            Go Back
          </Link>
        </div>
      </Form>
    </div>
  );
};

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(withRouter(AddEducation));
