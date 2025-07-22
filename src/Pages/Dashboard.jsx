import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import { useState, useEffect } from "react";
import { infoContents } from "../menuData";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
 
const navigate = useNavigate();
  const [active, setActive] = useState('coffee');
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    setCart(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) {
        return prev.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  return (
    <div className="">
      
      <Header />
      <div className="flex">
         <div className="fixed  h-screen w-48 bg-white shadow-md overflow-y-auto ">
    
    <Sidebar />
  </div>
        
        <div className="min-h-screen w-full bg-gray-200 flex flex-col items-center p-4 ml-[180px]">
 
          <div className="flex space-x-6 mb-6 mt-[20px]">
            {Object.entries(infoContents).map(([key, { title, icon }]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className={`w-[200px] h-[60px] bg-white  shadow-lg rounded-lg flex items-center justify-center space-x-2 ${active === key ? 'ring-2 ring-blue-500' : ''}`}
              >
                <img src={icon} alt={`${title} icon`} className="w-10 h-10" />
                <span className="font-medium text-[1.1rem]">{title.split(" ")[0]}</span>
              </button>
            ))}
          </div>

          
          <div className="">
            <h2 className="text-2xl font-semibold mb-4 mt-[30px]">{infoContents[active].title}</h2>

            
            <div className="grid grid-cols-5 flex mt-[30px] gap-[30px] ">
              {infoContents[active].items.map((item, index) => (
                <div key={index} className="flex flex-col items-center bg-gray-50  rounded-lg shadow-md w-[160px] h-[210px]">
                  <img src={item.image} alt={item.name} className="w-[170px] h-[110px] rounded-t-md object-cover mb-4" />
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <div className="flex items-center mt-[5px]  gap-[30px]">
                  {item.price && <p className="text-gray-600">₹{item.price}</p>}
                  <button
                    onClick={() => addToCart(item)}
                    className="w-8 h-8 text-lg bg-gray-300 rounded-full hover:bg-blue-700 hover:text-white transition flex items-center justify-center"
                  >
                    +
                  </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
