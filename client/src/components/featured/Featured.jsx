import "./featured.css"
import useFetch from "../../hooks/useFetch"
const Featured = () => {
    const {data,loading,error}=useFetch("/doctors/countBySpecialisation?speciality=pediatrics,general practice,oncology,neurology,gynecology,cardiology,psychiatry,anesthesiology,surgery")
  
    
    return (
        <div className="featured">
           {loading?"loading please wait":<><div className="featuredItem">
               <img src="https://accelresearchsites.com/wp-content/uploads/2019/06/Pediatrician.jpg" alt="" className="featuredImg" />
               <div className="featuredTitles">
                   <h1>Pediatrics</h1>
                   <h2>{data[0]} properties</h2>
               </div>
            </div> 
            <div className="featuredItem">
               <img src="https://accelresearchsites.com/wp-content/uploads/2019/06/Pediatrician.jpg" alt="" className="featuredImg" />
               <div className="featuredTitles">
                   <h1>General Practice</h1> 
                   <h2>{data[1]} properties</h2> 
               </div>
            </div> 
            <div className="featuredItem">
               <img src="https://accelresearchsites.com/wp-content/uploads/2019/06/Pediatrician.jpg" alt="" className="featuredImg" />
               <div className="featuredTitles">
                   <h1>Oncology</h1> 
                   <h2>{data[2]} properties</h2> 
               </div>
            </div> </>}  
        </div>
        
    )
}
export default Featured