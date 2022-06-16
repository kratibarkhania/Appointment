import "./list.css"
import Navbar from '../../components/navbar/Navbar.jsx'
import Header from '../../components/header/Header.jsx'
import { useLocation } from "react-router-dom"
import { useState } from "react"
import {format} from "date-fns";
import { DateRange } from "react-date-range"
import SearchItem from "../../components/searchItem/SearchItem"
import useFetch from "../../hooks/useFetch"
const List = () => {
    const location = useLocation();
    const [specialisation,setSpecialisation] = useState(location.state.specialisation)
    const [date,setDate] = useState(location.state.date);
    const [openDate,setOpenDate] = useState(false); 
    
    const {data,loading,error,reFetch}=useFetch(`/doctors?specialisation={specialisation}`)
    
    const handleClick = ()=>{
        reFetch()
    }
    return (
        <div>
            <Navbar/>
            <Header type="list"/>
            <div className="listContainer">
                <div className="listWrapper">
                   <div className="listSearch">
                       <h1 className="lsTitle">Search</h1>
                       <div className="lsItem">
                           <label>Specialisation</label>
                           <input placeholder={specialisation} type="text"/>
                       </div>
                       <div className="lsItem">
                           <label>Appointment Date</label>
                           <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
                           {openDate && <DateRange
                           onChange={item=>setDate([item.selection])} minDate={new Date()} ranges={date} />}
                       </div>
                   <button onClick={handleClick}>Search</button>
                   </div>
                   <div className="listResult">
                    {loading?"loading" : <>
                    {data.map(item=>(
                        <SearchItem item={item} key={item._id}/>
                    ))}
                     </>}
                      
                       
                    </div> 
        
                </div>
            </div>
        </div>
    )
}
export default List