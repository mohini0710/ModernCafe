import { Link } from "react-router-dom"
const Layout=()=>{
    return(
        <div>
             <nav className='nav'>
                <ul>
                    <li><Link to="/homepage">Home</Link></li>
                    <li><Link to="/categeries">Categeries</Link></li>
                    <li><Link to="/my tickets "> Tickets</Link></li>
                    <li><Link to="/profile">Profile</Link></li>

                </ul>
            </nav>
        </div>
    )
}
export default Layout