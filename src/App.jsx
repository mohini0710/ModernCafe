
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home.jsx'


import LoginPage from './Pages/LoginPage.jsx'
import Loginform from './Pages/Loginform.jsx'
import Register from './Pages/Register.jsx'
import HomePage from './Pages/HomePage.jsx'
import Categeries from './Pages/Categeries.jsx'
import MyTicket from './Pages/MyTicket.jsx'
import Profile from './Pages/Profile.jsx'
import UpcomingEvent from './Components/UpcomingEvent.jsx'
import EventNear from './Pages/EventNear.jsx'
import Layout from './Layout/Layout.jsx'
import EventShows from './Pages/EventShows.jsx'
import EditProfile from './Pages/EditProfile.jsx'
import Language from './Pages/Language.jsx'
import Favorite from './Pages/Favorite.jsx'
import TermsCondition from './Pages/TermsCondition.jsx'
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx'
import HelpCenter from './Pages/HelpCenter.jsx'
function App() {
 

  return (
    <>
      
      <>
    
        <Routes>
           <Route path="/" element={<Home/>} />
         
           <Route path="/login" element={<LoginPage />} />
           <Route path="/loginform" element={<Loginform />} />
            <Route path="/register" element={<Register />} />
             <Route path="/homepage" element={<HomePage />} />
             <Route path="/categeries" element={<Categeries />} />
             <Route path="/my ticket" element={<MyTicket />} />
             <Route path="/profile" element={<Profile />} />
              <Route path="/upcomingevent" element={<UpcomingEvent />} />
               <Route path="/event near you" element={<EventNear />} />
                <Route path="/eventshow" element={<EventShows />} />
                <Route path="/editprofile" element={<EditProfile />} />
                <Route path="/language" element={<Language />} />
                <Route path="/favorite" element={<Favorite />} />
                <Route path="/terms and condition" element={<TermsCondition />} />
                <Route path="/privacy policy" element={<PrivacyPolicy/>} />
                <Route path="/help and support" element={<HelpCenter />} />
               
       </Routes>
      
      </>
    </>
  )
}

export default App
