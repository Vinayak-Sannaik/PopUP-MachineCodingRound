// Popup.js
import React from "react";
import "./Popup.css";

const Popup = ({ show, onClose, content }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>
        <div className="popup-content">
          <div className="content-top">
            <img src={content.img} alt={content.name} />
            <div className="product-details">
              <h1>{content.name}</h1>
              <p>
                {" "}
                <h2>MRP:</h2>
                <h2>
                  <strong>{content.MRP}</strong>
                </h2>{" "}
                <hr />
              </p>
              <p>
                {" "}
                <h3>Content description:</h3> {content.description} <hr />
              </p>
              <p>
                {" "}
                <h3>Product Contents: </h3>
              </p>
              <ul>
                {content.contents.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <hr />
              <p>
                <h3>Shipping Time:</h3> {content.shippingTime}
              </p>
              <hr />
            </div>
          </div>

          <div className="content-below">
            <div className="sample-images">
              {content.sample_imgs.map((img, index) => (
                <img key={index} src={img} alt={`Sample ${index + 1}`} />
              ))}
            </div>
            <button className="Choose-now-btn">Choose Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
