import { Link } from "react-router-dom"
import { events } from "../events";
import './Upcoming.css'
import EventCard from "./EventCard"
const UpcomingEvent=()=>{
    
    return(
        <div className="upcoming">
          
            <div >
        {events.map((ev) => (
          <EventCard key={ev.id} event={ev}  />
        ))}
      </div>
           
    </div>
    )
}
export default UpcomingEvent