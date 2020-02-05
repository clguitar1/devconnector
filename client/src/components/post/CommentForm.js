import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post.actions';
import { Button, Form, FormGroup, Input } from 'reactstrap';

// postId is passed in from Post.js as props
const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='CommentForm'>
      <div>
        <h3>Leave a Comment</h3>
      </div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <FormGroup>
          <Input
            type='textarea'
            name='text'
            placeholder='Leave a comment'
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(null, { addComment })(CommentForm);
