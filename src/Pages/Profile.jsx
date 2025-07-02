import Layout from '../Layout/Layout'
import './Profile.css'
import { Link } from 'react-router-dom'
const Profile=()=>{
    return(
        <div className="profile">
            <h2>Profile</h2>
            
            <div className='profile-cont'>
                <img src="https://cdn-icons-png.flaticon.com/128/9512/9512757.png" alt="" />
                <Link to="/edit profile"><p>Edit Profile</p></Link>
                
            </div>
            <div className='profile-cont'>
                <h1>🌐</h1>
                <Link to="/language"><p>Language</p></Link>
            </div>
            <div className='profile-cont'>
                <h1>♡</h1>
                <Link to="/favorite"><p>Favorite</p></Link>
            </div>
           <div className='profile-cont'>
            <h1>🖥</h1>
            <Link to="/terms and condition"><p>Terms and Conditions</p></Link>
           </div>
           <div className='profile-cont'>
            <h1>ⓘ</h1>
            <Link to="/privacy policy"><p>Privacy Policy</p></Link>
           </div>
           <div className='profile-cont'>
            <h1>✉</h1>
           <Link to="/help and support"><p>Help and support</p></Link> 
           </div>
           <div className='profile-cont'>
            <img src="https://cdn-icons-png.flaticon.com/128/4043/4043198.png" alt="" />
            <h3>Logout</h3>
           </div>
          <Layout/>
        </div>
    )
}
export default Profile