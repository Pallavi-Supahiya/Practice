import React from 'react';
import Button from './Button';
import './Body.scss';

function Body() {
  return (
    <div className="body-container">
      <video src="videos/video-1.mp4" autoPlay loop muted />
      <h1>WELCOME, First Time with BTS ?</h1>
      <p>I Forgive</p>
      <div className="body-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Let's GO
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Video <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default Body;
