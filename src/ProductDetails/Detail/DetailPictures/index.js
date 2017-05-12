import React from "react";
import "./styles.css";
import Large from "./images/details/large.png";
import Miniature1 from "./images/details/mini-1.png";
import Miniature2 from "./images/details/mini-2.png";
import Miniature3 from "./images/details/mini-3.png";
import Miniature4 from "./images/details/mini-4.png";

export default () => {
  return (
    <div className="detail-pictures">
      <img src={Large} alt="large" className="detail-large" />
      <div className="detail-miniature-row">
        <button className="detail-miniature">
          <img src={Miniature1} alt="1" />
        </button>
        <button className="detail-miniature">
          <img src={Miniature2} alt="2" />
        </button>
        <button className="detail-miniature">
          <img src={Miniature3} alt="3" />
        </button>
        <button className="detail-miniature">
          <img src={Miniature4} alt="4" />
        </button>
        <div className="detail-stripes detail-miniature">
          <hr />
          <hr />
          <hr />
        </div>
        <span className="detail-more-pictures detail-miniature">
          see<br />more<br />photos
        </span>
      </div>
    </div>
  );
};
