import Calendar from "../Components/Calendar"

import { Link } from "react-router-dom"
import './EventShows.css'
const EventShows=()=>{
    return(
        <div className="calendar">
             <div className="calendar-pera">
              
              <Link to="/homepage"><p> ← Upcoming Event</p></Link>
            </div>
           <Calendar/> 
           
        </div>
    )
}
export default EventShows