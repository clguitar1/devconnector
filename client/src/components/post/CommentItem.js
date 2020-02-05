import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteComment } from '../../actions/post.actions';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import { Button } from 'reactstrap';

const CommentItem = ({
  postId,
  comment: { date, _id, text, name, avatar, user },
  auth,
  deleteComment
}) => {
  return (
    <div className='CommentItem bg-white p-3 my-3'>
      <Link to={`/profile/${user}`}>
        <img src={avatar} alt='avatar' className='rounded' />
        <h4>{name}</h4>
      </Link>
      <div className='CommentItem-content'>
        <p className='my-3'>{text}</p>
        <p>
          Post on <Moment format='YYYY/MM/DD'>{date}</Moment>
        </p>
        {!auth.loading && user === auth.user._id && (
          <Button onClick={() => deleteComment(postId, _id)} color='danger'>
            <i className='fas fa-times'></i>
          </Button>
        )}
      </div>
    </div>
  );
};

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
