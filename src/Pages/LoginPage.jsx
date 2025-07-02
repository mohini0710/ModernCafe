import './LoginPage.css'
import { Link } from 'react-router-dom'
const LoginPage=()=>{
    return(
        <div className="">
            <div className='Login'>
                 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScGkyosC0WH29zcnDe9FpOIsgP_gNjcOvKssR6z0SOJUd1jepiZhyU0jcB7vfRuETVw_o&usqp=CAU" alt="" />
             </div>
             <div className='login-cont'>
                <h1>See what happing in your</h1>
                <h2>area</h2>
                <p>price includes the item price and a buyer fee.</p>
                <p>Use, by you or one client, in a single end produc</p>
                <p>which end users are not charged for. The total</p>
                 <Link to="/register"><button >Get Started</button></Link>
             </div>
             
        </div>
    )
}
export default LoginPage