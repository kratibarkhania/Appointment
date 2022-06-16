import "./header.css"
import { faHouseMedical,faTruckMedical,faCommentMedical ,faPhone,faCalendarDays} from "@fortawesome/free-solid-svg-icons"
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {useState} from 'react';
import {format} from "date-fns";
import { useNavigate } from "react-router-dom";
const Header = ({type}) => {
    const [specialisation,setSpecialisation] = useState("");
    const [openDate,setOpenDate] = useState(false);
    
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
      const navigate = useNavigate() 
    const handleSearch=()=>{
        navigate("/doctors",{state:{specialisation,date}})
    }
    return (
        <div className="header">
            <div className={type==="list"?"headerContainer listMode":"headerContainer"}>
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faHouseMedical} />
                        <span>Appointment</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTruckMedical} />
                        <span>Ambulance</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCommentMedical} />
                        <span>Chat</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Helpline</span>
                    </div>
                </div>
                {type!=="list" && <>
                <h1 className="headerTitle">Consultation from home? WoW</h1>
                <p className="headerDesc">get nearby hospitals in map</p>
                <button className="headerBtn">Sign in/Register</button>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faHouseMedical} className="headerIcon"/>
                    <input type="text" placeholder="What speciality u want?" className="headerSearchInput" onChange={e=>setSpecialisation(e.target.value)}/>   
                    </div>
                    <div className="headerSearchItem">
                    <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
                    <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                    {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                    />}
                    </div>
                    <div className="headerSearchItem">
                      <button className="headerBtn" onClick={handleSearch}>Search</button>
                    </div>
                </div></>}
            </div>  
        </div>
    );
};
export default Header