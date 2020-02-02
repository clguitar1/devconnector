import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile.actions';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

const AddExperience = ({ addExperience, history }) => {
  const [formData, setFormData] = useState({
    company: '',
    title: '',
    location: '',
    from: '',
    to: '',
    current: false,
    description: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { company, title, location, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    // pass in the history object so we can redirect in profile.actions.js
    addExperience(formData, history);
  };

  return (
    <div className='Experience-form mb-5'>
      <h1 className='text-info'>Add an experience</h1>
      <p>
        <i className='fas fa-user mr-2'></i> Add any developer/programming
        positions that you have had in the past
      </p>
      <small>* = required field</small>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input
            type='text'
            name='title'
            value={title}
            onChange={onChange}
            placeholder='* Job Title'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='company'
            value={company}
            onChange={onChange}
            placeholder='* Company'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='location'
            value={location}
            onChange={onChange}
            placeholder='Location'
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
            placeholder='Job description'
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

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(withRouter(AddExperience));
