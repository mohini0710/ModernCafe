import './Home.css'
import { Link } from 'react-router-dom'

const Home=()=>{
 return(
        <div className='home'>
         
          <Link to="/login">
          <img src="https://images.pexels.com/photos/2747446/pexels-photo-2747446.jpeg?cs=srgb&dl=pexels-wolfgang-1002140-2747446.jpg&fm=jpg" alt="" />
           <div className=" home-cont">
          <div className='home-cont1'>
                <h1 className='pt-[500px] text-[3rem]'>EVENT</h1>
               <h2 className='pt-[500px] text-red-600 text-[3rem]' >HUB</h2>
          </div>
             
              
           
          </div>
          </Link> 
          
        </div>
    )
}
export default Home