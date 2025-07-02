import './Helpcenter.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

import emailjs from '@emailjs/browser';
const HelpCenter=()=>{
     const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit =(e)=>{
    e.preventDefault();

    const serviceId ='service_8ivusjb';
    const templateId ='template_hwthesj';
    const publicKey ='yVvlk3Lt9T_b2NRic';

    const templateParams ={
      from_name: name,
      from_email:email,
      message:message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=>{
      console.log('email send succesfuly', response);
      setName('');
      setMessage('');
      setEmail('');
       setSubmitted(true);
    })
    .catch((error)=>{
      console.log('error sending email:', error);
    }
  
  )
  }
    return(
        <div className="helpcenter">
            <div className="upcoming-pera">
              
              <Link to="/profile"><p> ← 
            Help and Support</p></Link>

            </div>
            <div className='helpcenter-img'>
                <img src="https://cdn3d.iconscout.com/3d/premium/thumb/customer-support-3d-icon-download-in-png-blend-fbx-gltf-file-formats--service-ecommerce-pack-e-commerce-shopping-icons-10087618.png?f=webp" alt="" />
            </div>
           
             <div className='Help-center'>
                 <p className="">We’re here to answer all your questions</p>
           {submitted ? (
        <p className="">Thanks for contact us, {name}!</p>
      ) : (
        <form onSubmit={handleSubmit} >
          <label className="h">
           
            <br /><input className="helpcenter-box"
              type="text"
              placeholder='Enter name'
              name="username"
              value={name}
                onChange={(e => setName(e.target.value))}
              required
            />
          </label>

          <br /><label className="">
          
            <br /><input className="helpcenter-box"
              type="email"
              placeholder='Enter Email'
              name="email"
              value={email}
               onChange={(e => setEmail(e.target.value))}
              required
            />
          </label>

          <br /><label className="">
           
            <br /><textarea className="helpcenter-text-box"
              type="Message"
              placeholder='Write Message here'
              name="Message"
              value={message}
             onChange={(e => setMessage(e.target.value))}
              required
            />
          </label>

          <br /><button className="helpcenter-btn" type="submit">Submit</button>
        </form>
        )}
      </div>
        </div>
    )
}
export default HelpCenter
