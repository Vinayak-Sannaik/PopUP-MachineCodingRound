import React, { useState } from 'react';
import './Products.css';
import img1 from './Frame.png';
import decor from './Frame (2).png';
import Popup from '../popup/Popup';
  
import { products } from '../../products_data';

const Products = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState(null);

  const handleQuickViewClick = (product) => {
    setPopupContent(product);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={`main-content ${showPopup ? 'blur' : ''}`}>
      <div className="section-header">
        <img className="decor-img-right" src={img1} alt="decor" />
        <h1>Our product</h1>
        <img className="decor-img-left" src={img1} alt="decor" />
      </div>

      <div className="products">
        {products.map(product => (
          <div className="product" key={product.id}>
            <img src={product.img} alt={product.name} />
            <div className="product-info">
              <h2>{product.name}</h2>
              <button className="quick-view-btn-red" onClick={() => handleQuickViewClick(product)}>QUICK VIEW</button>
            </div>
          </div>
        ))}
      </div>

      <img className="decor" src={decor} alt="" />

      <Popup show={showPopup} onClose={handleClosePopup} content={popupContent} />
    </div>
  );
};

export default Products;
