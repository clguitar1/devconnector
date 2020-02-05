import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post.actions';
import { Button, Form, FormGroup, Input } from 'reactstrap';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='PostForm'>
      <div>
        <h3>Say something...</h3>
      </div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
      >
        <FormGroup>
          <Input
            type='textarea'
            name='text'
            placeholder='Create a post'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(null, { addPost })(PostForm);
