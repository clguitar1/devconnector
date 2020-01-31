import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const CreateProfile = props => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: ''
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const onSubmit = () => {};

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className='Register-form mb-5'>
      <h1 className='text-info'>Create Your Profile</h1>
      <p>
        <i className='fas fa-user mr-2'></i>Let's get some information to make
        your profile stand out
      </p>
      <small>* = required field</small>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Input type='select' value={status} onChange={onChange} name='status'>
            <option value='0'>* Select Professional Status</option>
            <option value='Developer'>Developer</option>
            <option value='Junior Developer'>Junior Developer</option>
            <option value='Senior Developer'>Senior Developer</option>
            <option value='Manager'>Manager</option>
            <option value='Student or Learning'>Student or Learning</option>
            <option value='Instructor'>Instructor or Teacher</option>
            <option value='Intern'>Intern</option>
            <option value='Other'>Other</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            type='name'
            name='company'
            value={company}
            onChange={onChange}
            placeholder='Company'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='website'
            value={website}
            onChange={onChange}
            placeholder='Website'
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
          <Input
            type='text'
            name='skills'
            minLength='6'
            value={skills}
            onChange={onChange}
            placeholder='Skills'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='githubusername'
            minLength='6'
            value={githubusername}
            onChange={onChange}
            placeholder='Github username'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='text'
            name='skills'
            minLength='6'
            value={skills}
            onChange={onChange}
            placeholder='Skills'
          />
        </FormGroup>
        <FormGroup>
          <Input
            type='textarea'
            name='bio'
            minLength='6'
            value={bio}
            onChange={onChange}
            placeholder='A short bio'
          />
          <small className='form-text'>Tell us a little about yourself</small>
        </FormGroup>

        <div className='my-2'>
          <button
            onClick={() => toggleSocialInputs(!displaySocialInputs)}
            type='button'
            className='btn btn-light mr-3'
          >
            Add Social Network Links
          </button>
          <span>Optional</span>
        </div>

        {displaySocialInputs && (
          <div className='mt-3'>
            <FormGroup className='d-flex'>
              <i className='fab fa-twitter fa-2x mr-3'></i>
              <Input
                type='text'
                placeholder='Twitter URL'
                name='twitter'
                value={twitter}
                onChange={e => onChange(e)}
              />
            </FormGroup>
            <FormGroup className='d-flex'>
              <i className='fab fa-facebook fa-2x mr-3'></i>
              <Input
                type='text'
                placeholder='Facebook URL'
                name='facebook'
                value={facebook}
                onChange={e => onChange(e)}
              />
            </FormGroup>
            <FormGroup className='d-flex'>
              <i className='fab fa-youtube fa-2x mr-2'></i>
              <Input
                type='text'
                placeholder='Youtube URL'
                name='youtube'
                value={youtube}
                onChange={e => onChange(e)}
              />
            </FormGroup>
            <FormGroup className='d-flex'>
              <i className='fab fa-linkedin fa-2x mr-3'></i>
              <Input
                type='text'
                placeholder='Linkedin URL'
                name='linkedin'
                value={linkedin}
                onChange={e => onChange(e)}
              />
            </FormGroup>
            <FormGroup className='d-flex'>
              <i className='fab fa-instagram fa-2x mr-3'></i>
              <Input
                type='text'
                placeholder='Instagram URL'
                name='instagram'
                value={instagram}
                onChange={e => onChange(e)}
              />
            </FormGroup>
          </div>
        )}
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

CreateProfile.propTypes = {};

export default CreateProfile;
