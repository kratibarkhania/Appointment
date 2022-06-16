import "./searchItem.css"
import { Link } from "react-router-dom"; 
const SearchItem =({item})=>{
    return(
        <div className="searchItem">
            <img src={item.photos[0]} alt="" className="siImg" /> 
            <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.speciality}</span>
        
        <span className="siSubtitle">
        {item.experience}
        </span>
        <span className="siFeatures">
          {item.qualification}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          {item.address}   </span>
      </div>
      <div className="siDetails">
      
        <div className="siDetailTexts">
          <span className="siPrice">{item.onlineFees}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/doctors/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
             </div>
      </div>   
        </div>
    )
}

export default SearchItem