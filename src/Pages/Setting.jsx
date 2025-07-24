
import React from 'react';

function Setting() {
  const sections = [
    {
      title: 'Account',
      content: (
        <form className="space-y-4">
         
          <div>
            <label className="block mb-1">Name</label>
            <input className="w-full border px-2 py-1 rounded" type="text" required />
          </div>
          
          <div>
            <label className="block mb-1">Email</label>
            <input className="w-full border px-2 py-1 rounded" type="email" required />
          </div>
         
          <div>
            <label className="block mb-1">Password</label>
            <input className="w-full border px-2 py-1 rounded" type="password" required />
          </div>
       
          <div className="flex items-center space-x-2">
            <input id="2fa-toggle" type="checkbox" className="h-4 w-4" />
            <label htmlFor="2fa-toggle">Enable Two‑Factor Authentication</label>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </form>
      ),
    },
    {
      title: 'Preferences',
      content: (
        <form className="space-y-4">
          
          <div>
            <label className="block mb-1">Language</label>
            <select className="w-full border px-2 py-1 rounded">
              <option>English</option>
              <option>हिन्दी</option>
              <option>বাংলা</option>
            </select>
          </div>
         
          <div>
            <label className="block mb-1">Time Zone</label>
            <select className="w-full border px-2 py-1 rounded">
              <option>Asia/Kolkata</option>
              <option>UTC</option>
            </select>
          </div>
        
          <div className="space-y-2">
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" />
              <span>Email Notifications</span>
            </label>
            <label className="inline-flex items-center space-x-2">
              <input type="checkbox" />
              <span>SMS Notifications</span>
            </label>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </form>
      ),
    },
    {
      title: 'Store',
      content: (
        <form className="space-y-4">
         
          <div>
            <label className="block mb-1">Currency</label>
            <select className="w-full border px-2 py-1 rounded">
              <option>INR</option>
              <option>USD</option>
            </select>
          </div>
       
          <div>
            <label className="block mb-1">Tax Rate (%)</label>
            <input className="w-full border px-2 py-1 rounded" type="number" required />
          </div>
        
          <div>
            <label className="block mb-1">Shipping Rate (%)</label>
            <input className="w-full border px-2 py-1 rounded" type="number" required />
          </div>
        
          <div>
            <label className="block mb-1">Brand Logo</label>
            <input className="w-full" type="file" accept="image/*" />
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
        </form>
      ),
    },
    {
      title: 'Integrations',
      content: (
        <div className="space-y-4">
          <form className="space-y-4">
          
            <div>
              <label className="block mb-1">API Key</label>
              <input className="w-full border px-2 py-1 rounded" type="text" required />
            </div>
            <div>
              <label className="block mb-1">API Secret</label>
              <input className="w-full border px-2 py-1 rounded" type="password" required />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save</button>
          </form>
         
          <div className="space-y-2">
            <button className="w-full border px-4 py-2 rounded hover:bg-gray-100">Connect Shopify</button>
            <button className="w-full border px-4 py-2 rounded hover:bg-gray-100">Connect WooCommerce</button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-[700px] ml-[50px] mx-auto pt-[50px] space-y-5 ">
      
      <h1 className="text-3xl font-semibold mb-4">Settings</h1>
      {sections.map((sec, i) => (
        <details key={i} className="border rounded">
          <summary className="cursor-pointer px-4 py-2 bg-grey-100 hover:bg-gray-200">
            {sec.title}
          </summary>
          <div className="px-4 py-4">
            {sec.content}
          </div>
        </details>
      ))}
    </div>
  );
}

export default Setting;
