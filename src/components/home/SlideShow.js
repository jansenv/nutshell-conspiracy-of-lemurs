import React from 'react';
import { Slide } from 'react-slideshow-image';
import "./SlideShow.css"
 


export default ()=>{


const slideImages = [
  './images/BridgeLemur.jpg',
  './images/ILikeToMoveItLemur.jpg',
  './images/LeahLemur.jpg',
  './images/Lemur.jpg',
  './images/LemurHat.jpg',
];
 
const properties = {
  duration: 10000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}
 

    return (
      <>
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div>
              <img className="slideshowimage" src={require('../images/BridgeLemur.jpg')}></img>
              <span>Bridge Lemur</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../images/MoMo.jpg')}></img>
            <br></br>

              <span>MoMo</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../images/ILikeToMoveItLemur.jpg')}></img>
            <br></br>

              <span>I like to MOVE IT! Lemur</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../images/LeahLemur.jpg')}></img>
            <br></br>

              <span>Leah Lemur</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../images/Lemur.jpg')}></img>
            <br></br>

              <span>Lemur</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../images/LemurHat.jpg')}></img>
            <br></br>

              <span>LemurHat</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../auth/logo.png')}></img>
            <br></br>

              <span>LemurSquad</span>
            </div>
          </div>
          <div className="each-slide">
            <div>
            <img className="slideshowimage" src={require('../images/jumpingLemur.gif')}></img>
            <img className="slideshowimage" src={require('../images/jumpingLemur.gif')}></img>
            <img className="slideshowimage" src={require('../images/jumpingLemur.gif')}></img>
            <img className="slideshowimage" src={require('../images/jumpingLemur.gif')}></img>
            <img className="slideshowimage" src={require('../images/jumpingLemur.gif')}></img>
            <img className="slideshowimage" src={require('../images/jumpingLemur.gif')}></img>
<br></br>
              <span>Jumping Lemurs!!</span>
            </div>
          </div>
        </Slide>
      </div>
      </>
    )


}