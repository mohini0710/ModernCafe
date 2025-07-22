import { Link } from 'react-router-dom';

const Sidebar = () => (
  <nav className="w-64  bg-white shadow-md text-black p-4">
    <div className='flex gap-[10px] mt-[10px]'>
   <h1 className='mt-[20px]'>🎛️</h1>
    <Link to="/" className='hover:text-red-600'><p className='mb-[10px] mt-[20px]'> DashBoard</p></Link>
    </div>
    <ul>
    <li className='flex items-center'>
        <img className='w-[25px] mt-[10px]' src="https://www.shutterstock.com/image-vector/shopping-cart-check-mark-icon-600nw-1708233319.jpg" alt="" />
        <Link to="/my cart" className="block py-2 px-4 hover:text-red-600 mt-[10px]">My Cart</Link>
      </li>
       
       <li className='flex items-center'>
        <img className='h-[20px] mt-[10px]' src="https://cdn-icons-png.flaticon.com/128/1144/1144760.png" alt="" />
        <Link to="/customer" className="block py-2 px-4 hover:text-red-600 mt-[10px]">customer</Link>

      </li>
      <li className='flex items-center'>
       <h1 className='mt-[10px]'>✉</h1>
        <Link  className="block py-2 px-4 hover:text-red-600 mt-[10px]">View Receipt</Link>

      </li>
      
    </ul>
    <div className='mt-[125px] pb-[20px]'>
        <ul>
            <li className='flex items-center'>
               <h1 className='mt-[10px]'>⚙️</h1>
               <Link  to="/setting" className="block py-2 px-4 hover:text-red-600 mt-[10px]">Settings</Link>
            </li>
             <li className='flex items-center'>
               <h1 className='mt-[10px]'>✉</h1>
               <Link to="/help center" className="block py-2 px-4 hover:text-red-600 mt-[10px]">Help center</Link>
             </li>
             <li className='flex items-center'>
               <img className='w-[18px] mt-[10px] ml-[5px]' src="https://cdn-icons-png.flaticon.com/128/4043/4043198.png" alt="" />
               <Link to="/log out" className="block text-red-600 py-2 px-4 hover:text-red-600 mt-[10px]">Log out</Link>
        
             </li>
        </ul>
    </div>
  </nav>
);

export default Sidebar;