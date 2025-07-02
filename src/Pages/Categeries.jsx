import Layout from '../Layout/Layout'
import './Categeries.css'
import { Link } from 'react-router-dom'
const Categeries=()=>{
    return(
        <div className="categeries">
            <p>Categeries</p>
            <div className="categeries-cont">
                <Link to="/music">
               <div className='categeries-main'>
                 <img src="https://2.wlimg.com/product_images/bc-full/2022/3/10049362/musical-event-organizing-services-1648725038-6266226.jpeg" alt="" />
                 <div className='overlap'>
                   <p>Music</p>
                 </div>
              </div>
              </Link>
              <Link to="/sports">
              <div className='categeries-main'>
                <img src="https://mitwpu.edu.in/uploads/images/SportsFacilities04.webp" alt="" />
                <div className='overlap'>
                    <p>Sports</p>
                </div>
              </div>
              </Link>
           </div>
           <div className="categeries-cont">
            <Link to="/dance">
               <div className='categeries-main'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD9vrQH1_hbUNs-t0fHOq8YiWpM06RzcvBA&s" alt="" />
                 <div className='overlap'>
                   <p>Dance</p>
                 </div>
              </div>
              </Link>
              <Link to="/education">
              <div className='categeries-main'>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw34NfIRtqKVTaoqip77-uFSXTNvfDNIHlNA&s" alt="" />
                <div className='overlap'>
                    <p>Education</p>
                </div>
              </div>
              </Link>
           </div>
           <div className="categeries-cont">
            <Link to="/food">
               <div className='categeries-main'>
                 <img src="https://www.india.com/wp-content/uploads/2018/01/Food-festival.jpg" alt="" />
                 <div className='overlap'>
                    <p>Food</p>
                 </div>
              </div>
              </Link>
              <Link to="/health">
              <div className='categeries-main'>
                <img src="https://medicaldialogues.in/h-upload/2020/07/04/750x450_131249-854596-doctor-istock.webp" alt="" />
                <div className='overlap'>
                   <p>Health</p>
                </div>
              </div>
              </Link>
           </div>
           
            <Layout/>
        </div>
    )
}
export default Categeries