import React from 'react';

  const oneReviewRrapper = {
    borderBottom: '1px solid grey',
    borderTop: '1px solid grey',
    paddingTop: '20px',
    paddingBottom: '20px',
  }

  const avatar = {
    borderRadius:'50%',
    maxHeight: '100%',
    maxWidth: '100%'
  }

  const leftColumn = {
    display: 'inline-block',
    border: '1px solid red',
    width: '19%'
  }

  const rightColumn = {
    display: 'inline-block',
    border: '1px solid green',
    width: '79%',
    paddingLeft: '1%'
  }

  const avatarContainer = {
    display: 'block',
    border: '1px solid red',
    width: '29%',
    maxHeight: '100%',
    maxWidth: '100%',
    float: 'left'
  }

  const authorTimeContainer = {
    display: 'block',
    border: '1px solid green',
    width: '59%',
    paddingLeft: '1%',
    maxHeight: '100%',
    maxWidth: '100%',
    float: 'left'
  }

  const Review = ({review}) => (
  <div className="one-review-wrapper" style={oneReviewRrapper}>
    <div className="left-column" style={leftColumn}>
      <div className="avatar-container" style={avatarContainer}>
        <img className="avatar" src={review.authorImgUrl} style={avatar}></img>
      </div>
      <div className="author-time-container" style={authorTimeContainer}>
      <span className="time">{review.created}</span>
      <span className="author">{review.author}</span>
      </div>
    </div>
    <div className="rigth-column" style={rightColumn}>
      <div className="stars-container"></div>
      <div className="text-container">{review.body}</div>
      <div className="controls-container"></div>
    </div>
  </div>
  );

export default Review;


