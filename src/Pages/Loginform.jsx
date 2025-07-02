import './Loginform.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const Loginform=()=>{
      const [formData, setFormData] = useState({
        
        email: '',
       
      })
    
      const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }))
      }
    
      const handleSubmit = (e) => {
        e.preventDefault()
        
        localStorage.setItem('userData', JSON.stringify(formData))
        
        setFormData({
         
          email: '',
          
        })
        
      }
      
    return(
        <div >
            <div className='lg'>

           
            <Link to="/login"><p>←</p></Link>
             </div>
        <div className="Loginform">
            
            <div className='login-img'>
                   <img src="https://media.istockphoto.com/id/1216157391/vector/abstract-letter-e-logo-design.jpg?s=612x612&w=0&k=20&c=CzjMQnjwYDuVuS37UeWIDLsGxB9kRaXt-cNSNasBeNI=" alt="" />
            </div>
            
            <h1>Let's you in</h1>
                    
           <div className="wixelsign-cont1">
                   
                    <div>
                        <button className="wixelsign-btn"> <img src="https://wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/logos/google-logo.svg" alt="" />
                           Continue with Google </button>
                    </div>
                    <div>
                        <button className="wixelsign-btn"><img src="https://wixmp-7ef3383b5fd80a9f5a5cc686.wixmp.com/logos/fb-icon.svg" alt="" />Continue with Facebook</button>
                    </div>
                    <div>
                        <button className="wixelsign-btn"><img src="data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8'%3f%3e %3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='16px' height='20px' viewBox='20 16 16 20' version='1.1'%3e %3c!-- Generator: Sketch 61 (89581) - https://sketch.com --%3e %3ctitle%3eBlack Logo Square%3c/title%3e %3cdesc%3eCreated with Sketch.%3c/desc%3e %3cg id='Black-Logo-Square' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3e %3crect id='Rectangle' fill='white' x='0' y='0' width='16' height='20'/%3e %3cpath d='M28.2226562%2c20.3846154 C29.0546875%2c20.3846154 30.0976562%2c19.8048315 30.71875%2c19.0317864 C31.28125%2c18.3312142 31.6914062%2c17.352829 31.6914062%2c16.3744437 C31.6914062%2c16.2415766 31.6796875%2c16.1087095 31.65625%2c16 C30.7304687%2c16.0362365 29.6171875%2c16.640178 28.9492187%2c17.4494596 C28.421875%2c18.06548 27.9414062%2c19.0317864 27.9414062%2c20.0222505 C27.9414062%2c20.1671964 27.9648438%2c20.3121424 27.9765625%2c20.3604577 C28.0351562%2c20.3725366 28.1289062%2c20.3846154 28.2226562%2c20.3846154 Z M25.2929688%2c35 C26.4296875%2c35 26.9335938%2c34.214876 28.3515625%2c34.214876 C29.7929688%2c34.214876 30.109375%2c34.9758423 31.375%2c34.9758423 C32.6171875%2c34.9758423 33.4492188%2c33.792117 34.234375%2c32.6325493 C35.1132812%2c31.3038779 35.4765625%2c29.9993643 35.5%2c29.9389701 C35.4179688%2c29.9148125 33.0390625%2c28.9122695 33.0390625%2c26.0979021 C33.0390625%2c23.6579784 34.9140625%2c22.5588048 35.0195312%2c22.474253 C33.7773438%2c20.6382708 31.890625%2c20.5899555 31.375%2c20.5899555 C29.9804688%2c20.5899555 28.84375%2c21.4596313 28.1289062%2c21.4596313 C27.3554688%2c21.4596313 26.3359375%2c20.6382708 25.1289062%2c20.6382708 C22.8320312%2c20.6382708 20.5%2c22.5950413 20.5%2c26.2911634 C20.5%2c28.5861411 21.3671875%2c31.013986 22.4335938%2c32.5842339 C23.3476562%2c33.9129053 24.1445312%2c35 25.2929688%2c35 Z' id='%ef%a3%bf' fill='black' fill-rule='nonzero'/%3e %3c/g%3e %3c/svg%3e" alt="" />Continue with Apple</button>
                    </div>
                   
                    </div>
                    <div className='sign-btn'>
                        <Link ><button>Sign in with Password</button></Link>
                        <p>Don't have an account?<Link to="/register">sign up</Link> </p>
                    </div>
                        
        </div>
        </div>
    )
}
export default Loginform