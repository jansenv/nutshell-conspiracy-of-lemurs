import React from "react"
import Popup from "reactjs-popup"
import "./Ad.css"

export default () => (

    
    <Popup trigger={<h1 className="button"> Events </h1>} modal>
      {close => (
        <div className="modal">
          <a className="close" onClick={close}>
            &times;
          </a>
          <img class="centerImage" src={require('../images/ad.jpg')}></img>
        </div>
      )}
    </Popup>
  );