import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from "./Pages/Dashboard"
import Customer from './Pages/Customer';
import MyCart from './Pages/MyCart';
import HelpCenter from './Pages/HelpCenter';
import Logout from './Pages/Logout';
import Setting from './Pages/Setting';
import ViewAllReceipts from './Pages/ViewAllReceipts';


function App() {
 return (
    <>
   
      <Routes>
      
       
       <Route path="/" element={<Dashboard />} />
       
       <Route path="/customer" element={<Customer />} /> 
        <Route path="/my cart" element={<MyCart />} /> 
         <Route path="/helpCenter" element={<HelpCenter />} /> 
          <Route path="/Logout" element={<Logout />} /> 
           <Route path="/setting" element={<Setting />} /> 
            <Route path="/view-all-receipts" element={<ViewAllReceipts />} /> 
             
    </Routes>
    </>
  )
}

export default App
