import React from "react";
import './Content.css';
import hr from '../../images/hotel-receptionist.jpg'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import Images from "../Images/Images";
function Content() {
  return (
    <div className="content_container">
      <Images/>
      <div className="company_details">
        <div className="company_owner">
          <h3>Hotel Vishal @ Airpot</h3><br/>
          <p>104/2/2, National Highway 8, Mahipalpur, New <a href="https://goo.gl/maps/dZML4beegdNKPqYAA"> View Map</a></p>
          <p>Delhi, 110037 New Delhi, India</p>
          <br/>
          <h4>+91-7654564545, 9107344682</h4>
        </div>
        <div className="address">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3946.175230743984!2d77.2150698866791!3d28.646045541495297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x63720c98a40e305d!2sHotel%20Kwality!5e0!3m2!1sen!2sin!4v1672754543963!5m2!1sen!2sin" width="200" height="150" style={{border:'0px'}} allowFullScreen="" loading="lazy" ></iframe>
        </div>
        <br/>
       
      </div>
      <div className="services">
        <ul className="service_list">
            <li>Free Parking</li>
            <li>Conference Room</li>
            <li>ATM</li>
            <li>Conference Room</li>
            <li>Conference Room</li>
        </ul>
        <br/>
        </div>

        <p style={{marginBottom:'30px'}}>Located in New Delhi, 7.4 km from Rashtrapati Bhavan, Hotel Vishal @ Airport provides accommodation with a restaurent, free private parking and a fitness centre.
            This 3-star hotel offers an ATM, a concierge service and free WiFi. The accommodation features a 24-hour front desk, room service and currency exchange for guests.
        </p>
        <hr/>

      <h4 style={{marginTop:'20px'}}>Poverty Rules</h4>
      <p>Check-in: 12PM Check-out: 12PM</p>
      <div className="poverty_rules">
       
        <div className="rule-1">
        <ul>
            <li>Guests with fever are not allowed.</li>
            <li>Guests from containment zones are not allowed.</li>
            <li>Guests below 18 years of age are not allowed at the poverty.</li>
            <li>PAN Card and Non-Govt IDs are not accepted as ID proof(S). </li>
            <li>Aadhar, Driving License and Govt. ID are accepted as ID proof(s).</li>
            <li>Proverty Staff is trained on the hygiene guidlines.</li>
            <li>Pets are not allowed.</li>
            <li>Outside food is not allowed.</li>
            <li>Smoking within the premises is not allowed.</li>
            <li>Does not allow private parties or events.</li>
            <li>Quarantine protocols are being followed as per local government authorities.</li>
        </ul>
        </div>

        <div className="rule-2">
        <ul>
            <li>Pets are not allowed.</li>
            <li>Outside food is not allowed.</li>
            <li>Smoking within the premises is not allowed.</li>
            <li>Does not allow private parties or events.</li>
            <li>Quarantine protocols are being followed as per local government authorities.</li>
        </ul>
        </div>
      </div>
    </div>
  );
}

export default Content;