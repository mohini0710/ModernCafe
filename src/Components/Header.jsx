
import { useState } from "react";


export default function Header({

  onSearch = () => {},
  hasNotifications = false,
  onBellClick = () => {},
}) {
  const [query, setQuery] = useState("");
  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  return (
    <header className="flex items-center justify-between px-4  bg-white shadow-md sticky top-0 z-50">
      

       <img className="h-[80px]" src="https://images-platform.99static.com//gi3zuQFBxv68-6zf1BMQ7Cmqz5E=/0x0:960x960/fit-in/500x500/99designs-contests-attachments/142/142215/attachment_142215435" alt="" />
      
      <div className="flex-1 max-w-lg mx-4 relative">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search here..."
          className="w-full pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        
      </div>

   
      <button
        onClick={onBellClick}
        className="relative p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-300"
      >
        {hasNotifications && (
          <span className="absolute top-1 right-1 inline-flex h-2 w-2 rounded-full bg-red-600"></span>
        )}
       <img className="h-[50px] rounded-full" src="https://thumbs.dreamstime.com/b/bell-icon-design-vector-button-sign-symbol-logo-image-eps-jpg-picture-flat-app-web-art-isolated-white-background-192653651.jpg" alt="" />
      </button>
    </header>
  );
}
