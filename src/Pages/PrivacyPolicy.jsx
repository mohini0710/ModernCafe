import { Link } from "react-router-dom"
import './PrivacyPolicy.css'
const PrivacyPolicy=()=>{
    return(
        <div className='Privacy'>
            <div className="upcoming-pera">
              
              <Link to="/profile"><p> ← 
                Privacy Policy</p></Link>

            </div>
            <div className="Privacy-img">
            <img src="https://www.cookieyes.com/wp-content/uploads/2025/04/Creating-a-Privacy-Policy-for-Facebook-Ads_-Best-Practices.png" alt="" />
            </div>
            <div className="privacy-terms">
                <p>his is the privacy policy that governs how Event Name/ Event Organizer (“Event”/ “Organizer,” “we”, “our" or “us”), use Personal Data that we collect, receive and protect about individuals and/or companies in connection with the use of the event website i.e. (website URL) ,its sub-domains, external marketing activities and the services provided by the Event i.e. the web applications and mobile applications.</p>
                <p>The privacy document describes the practices of the Event/Organizer to protect and safeguard the individual’s privacy whose data is being collected. This privacy policy holds great significance to us in terms of protecting the privacy of all the people.</p>
                <p>The Privacy Policy is developed as a part of the End User Terms of Service which can be viewed on the website and within the Services which we provide. The Terms of Use must be accepted prior to using the service for the first time.</p>
                <p>By agreeing to use our services, and going through our Privacy Policy, users provide their consent for us to collect, store and process their data as required. Users, who are in disagreement about this privacy policy, won’t be able to access our products or services.

After updating our privacy policies if the user continues to access our services, then it will be deduced they have readily accepted the revised policies.</p>
<p>We at (Event Name) collect a variety of personal data including name, e-mail address, contact number; social media account ID from the given sources.

Our use of personal information collected through applications shall be limited to the purpose of providing the services to our attendees that have signed up for the event and are currently engaged in using the Services provided by us.

If you do not agree with our policies at any point, you may choose not to use our applications and services.</p>
            </div>
        </div>
    )
}
export default PrivacyPolicy