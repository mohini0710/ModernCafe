import Eventnear from '../Components/Eventnear'
import './EventNear.css'
import { eventnear } from '../eventnear'
import { Link } from 'react-router-dom'
const EventNear=()=>{
    return(
        <div className='eventnear'>
           <div className="upcoming-pera">
              
              <Link to="/homepage"><p> ← Events Near you</p></Link>
            </div>
             <div >
                    {eventnear.map((ev) => (
                      <Eventnear key={ev.id} events={ev}  />
                    ))}
                  </div>

          </div>
    )
}
export default EventNear