import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React ,{useState} from "react";
import bg from '../../images/bg-img.png';
import './Header.css';
import { DateRange } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from "date-fns";
import { addDays } from 'date-fns';

function Header() {
  const[openDate, setOpenDate] = useState(false);
  const[openOptions, setOpenOptions] = useState(false);
  // const[open, setOpen] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate:  addDays(new Date(), 7),
      key: 'selection',
    }
  ]);
  const[options, setOptions] = useState({
      adult:1,
      children:0,
      room:1,
  });

  const handleOption=(name, operation)=>{
    setOptions(prev=>{
      return{
      ...prev, [name]:operation === "i" ? options[name] + 1 :options[name] - 1, 
    };
  });
  };

  return (
    <div className="header_container">
     <img src={bg} alt="hotel" className="img"/>
     <div className="header_items">

      <div className="headerSearch">
          
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          
            <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText" >{`${format(date[0].startDate, "MM/dd/yyyy")}`}</span>
            <FontAwesomeIcon icon={faChevronDown} />
           {openDate && <DateRange
              
              onChange={item => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              showSelectionPreview={true}
              months={2}
              ranges={date}
              direction="horizontal"
              className="date"
            />}
          </div>

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
          <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
          <FontAwesomeIcon icon={faChevronDown} />
          </div>

          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adults · ${options.children} children · ${options.room} rooms`}</span>
          <FontAwesomeIcon icon={faChevronDown} />
          {openOptions && <div className="options">
          <small className="max_quantity">MAXIMUM 2 GUESTS PER ROOM</small>
            <div className="optionItem">
              <div className="quantity">
              <span>Adult</span><br/>
              <small>(Max: 2 total guests/room)</small>
              </div>
              <div className="optionCounter">
              <button disabled={options.adult <=1} className="optionCounterButton" onClick={()=>handleOption("adult", "d")}>-</button>
              <span className="optionCounterNumber">{options.adult}</span>
              <button className="optionCounterButton" onClick={()=>handleOption("adult", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <div className="quantity">
              <span>Children</span><br/>
              <small>(Max: 2 total guests/room)</small>
              </div>
              <div className="optionCounter">
              <button disabled={options.children <=0} className="optionCounterButton" onClick={()=>handleOption("children", "d")}>-</button>
              <span className="optionCounterNumber">{options.children}</span>
              <button className="optionCounterButton" onClick={()=>handleOption("children", "i")}>+</button>
              </div>
            </div>
            <div className="optionItem">
              <div className="quantity">
              <span>Room</span><br/>
              <small>(Max: 2 total guests/room)</small>
              </div>
              <div className="optionCounter">
              <button disabled={options.room <=1} className="optionCounterButton" onClick={()=>handleOption("room", "d")}>-</button>
              <span className="optionCounterNumber">{options.room}</span>
              <button className="optionCounterButton" onClick={()=>handleOption("room", "i")}>+</button>
              </div>
            </div>

            <button className="optionButton" onClick={()=>setOpenOptions(!openOptions)}>Done</button>
          </div>
          
          }
          </div>
      </div>

      <div className="headerSearchBtn">
        <button className="headerBtn">Check Availability</button>
      </div>

     </div>
    </div>
  );
}

export default Header;