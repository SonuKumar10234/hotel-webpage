import React from "react";
import './Images.css';
import hr from '../../images/hotel-receptionist.jpg'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'
function Images() {
  return (
    
      <div className="image_container">
        <div className="hotel-receptionist">
           <img src = {hr} alt="" className="img_content"/>
           <div className="circle">
               <div className="v">V</div>
               <div className="r">R</div>
           </div>
        </div>
        <div className="imageItems">
            <div className="image-item">
              <img src={img1} alt="item1" className="img_content"/>
            </div>
            <div className="image-item">
              <img src={img2} alt="item1" className="img_content"/>
            </div>
            <div className="image-item">
              <img src={img3} alt="item1" className="img_content"/>
            </div>
            <div className="image-item">
              <img src={img4} alt="item1" className="img_content"/>
            </div>
        </div>
      </div>
    
  );
}

export default Images;