import Layout from '../Layout/Layout'
import './HomePage.css'
import {Link, Outlet} from 'react-router-dom'

const HomePage=()=>{
    return(
        <div className='hp' >
            
            <div className='Homepage'>
            <img src="https://www.pngitem.com/pimgs/m/24-248631_blue-profile-logo-png-transparent-png.png" alt="" />
            <p>Let's explore Events and Party</p>
            </div>
            <button >search</button>
            
            <div className='homePage-cont1'>
                <div> <h4>Upcoming Event</h4></div>
              
               <div><Link to="/eventshow">View All</Link></div>
                
            </div>
            <div className='homePage-img'>
                <img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6X_PpQ-z9qvmOdFOBUIUn_ytr7mHkBorT1r_XhnCBPceMfDm8Dm1m-KoaDcpGMhK0m4I&usqp=CAU" alt="" />
                <div className='overlay'>
                    <div className='pera1'> <p>Musical night festival</p> </div>
                  
                  <div className='pera2'><p></p></div> 
                   <div className='pera3'><p>15 June 2025</p></div>
                </div>
            </div>
            <div className='homepage-cont2'>
                <div className='homepage-box'>
                    <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f3c0.svg" alt="" />
                   <Link><h5>Sports</h5></Link> 
                </div>
                <div className='homepage-box'>
                    <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f3b5.svg" alt="" />
                    <Link><h5>Music</h5></Link>
                </div>
                <div className='homepage-box'>
                    <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f483.svg" alt="" />
                    <Link><h5>Dance</h5></Link>
                </div>
                <div className='homepage-box'>
                    <img src="https://images.emojiterra.com/google/noto-emoji/unicode-16.0/color/svg/1f3a6.svg" alt="" />
                    <Link><h5>Movie</h5></Link>
                </div>
            </div>
            <div className='homePage-cont3'>
                <div className='homePage-cont1'>
                    <h4>Event near you</h4>
                    <Link to="/event near you"><p>view all</p></Link>
                </div>
                
                <div className='homepage-cont3'>
                    <div >
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP1gj5WNlAL-ZpmZBIwq8pd6V5St4V7f4SIA&s" alt="" />
                    </div>
                    <div className='pera'>
                        <div className='peras1'> <p>Musical night festival</p> </div>
                  
                         <div className='peras2'><p>city central Mall</p></div> 
                         <div className='peras3'><p>15 June 2025</p></div>  
                    </div>
                </div>
                 <div className='homepage-cont3'>
                    <div >
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj42K_4cAW-hM78yk0w1kvu8KBkn_doP5_9Q&s" alt="" />
                    </div>
                    <div className='pera'>
                        <div className='peras1'> <p>Musical night festival</p> </div>
                  
                         <div className='peras2'><p>city central Mall</p></div> 
                         <div className='peras3'><p>15 June 2025</p></div>  
                    </div>
                </div>
                 <div className='homepage-cont3'>
                    <div >
                         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREcKFsOG1Fgrc3lVjnJsBzz2vQnm1X-GFntA&s" alt="" />
                    </div>
                    <div className='pera'>
                        <div className='peras1'> <p>Musical night festival</p> </div>
                  
                         <div className='peras2'><p>city central Mall</p></div> 
                         <div className='peras3'><p>15 June 2025</p></div>  
                    </div>
                </div>
            </div>
            <Layout/>
            <Outlet/>
             
        </div>
    )
}
export default HomePage