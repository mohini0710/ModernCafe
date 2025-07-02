import './TermsCondition.css'
import { Link } from 'react-router-dom'
const TermsCondition=()=>{
    return(
        <div className='terms'>
            <div className="upcoming-peras">
              
              <Link to="/profile"><p> ← Terms and Conditions</p></Link>
             
            </div>
            <div className='terms-pera'>
            <p>The price of any of our Events are available on our Website. Prices listed are inclusive of VAT (if VAT is applicable) at the prevailing rate unless otherwise stated. Prices are liable to change at any time, but changes will not affect bookings in respect of which we have already sent you a Booking Confirmation, except .</p>
           
            <p>You may pay for your booking online by credit and debit card. Credit and debit card payments made online through our Website are processed by a secure payment collection service. Our online payment processing is undertaken by Sagepay, a leading secure internet payment service provider.</p>
            <p>o successfully process your online booking, we will take your name, address and other details and then you will be transferred to a secure page to enter your credit or debit card details and finalise the payment process. Sagepay will need to know certain information about you in order to process payment for the booking  .</p>
            <p>We shall be entitled to charge you interest on late payments in accordance with the Late Payment of Commercial Debts (Interest) Act 1998 (as amended from time to time).  Please note, we ensure our emails are secure as possible, however, please do not send us payment information using email. You can make a payment over the phone by calling 01865 254760. Unless we are proven to be fraudulent or negligent, we will not be liable to you for any losses caused as a result of unauthorised access to the personal and transactional information that you provide us when making a booking.﻿</p>
            </div>
        </div>
    )
}
export default TermsCondition