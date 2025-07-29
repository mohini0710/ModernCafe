

import  { useState, useEffect, useRef, forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import html2canvas from 'html2canvas';
import { useLocalStorage } from "../hooks/useLocalStorage";


import jsPDF from 'jspdf';


const TAX_RATE = 0.05;
const Receipt = forwardRef(({  discountPct, customerName, paymentMode }, ref) => {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const discount = subtotal * (discountPct / 100);
  const total = subtotal + tax - discount;

  return (
    <div ref={ref} style={{ padding: 20, background: '#fff', width: 300 }}>
      <h2>HolyNow Coffee House</h2>
      <p><strong>Customer:</strong> {customerName || 'N/A'}</p>
      <p><strong>Payment:</strong> {paymentMode}</p>
      <hr/>
      <ul>
        {cart.map(item => (
          <li key={item.id}>
            {item.name} × {item.quantity} = ₹{(item.price * item.quantity).toFixed(2)}
          </li>
        ))}
      </ul>
      <hr/>
      <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
      <p>Tax (5%): ₹{tax.toFixed(2)}</p>
      <p>Discount: -₹{discount.toFixed(2)}</p>
      <h3>Total: ₹{total.toFixed(2)}</h3>
    </div>
  );
});
Receipt.displayName = 'Receipt';

const MyCart = () => {
    const [discountPct, setDiscountPct] = useState(0);
    const [showSummary, setShowSummary] = useState(false);
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [paymentMode, setPaymentMode] = useState('Cash');
    const [showReceipt, setShowReceipt] = useState(false);
    const [receipts, setReceipts] = useLocalStorage('receipts', []);
    const handleGenerate = () => {
    setCheckoutOpen(false);
    setShowReceipt(true);
    const receipt = {
      id: Date.now(),
      date: new Date().toISOString(),
      customerName,
      paymentMode,
      items: cart.map(i => ({ id: i.id, name: i.name, price: i.price, quantity: i.quantity })),
      subtotal,
      tax,
      discountPct,
      total: grandTotal
    };
    setReceipts(prev => [...prev, receipt]);
  };
  
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('cart')) || []);
const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const updateQty = (id, delta) => {
    setCart(prev => prev
      .map(i => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
      .filter(i => i.quantity > 0)
    );
  };
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const subtotal = cart.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);
  const tax = subtotal * TAX_RATE;
  const discount = subtotal * (discountPct / 100);
  const grandTotal = subtotal + tax - discount;
   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = cart.reduce((sum, i) => sum + (i.price || 0) * i.quantity, 0);
 
  const handleDownloadPDF = async () => {
    const element = receiptRef.current;
    if (!element) return;

    const canvas = await html2canvas(element, { scale: 2 });
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('receipt.pdf');
  };
 const receiptRef = useRef(null);

 
  const handlePrint = useReactToPrint({
    contentRef: receiptRef,
    documentTitle: 'Receipt',
  });


  return (
    <div className="p-8 ">
        <div className='flex justify-between '>
        <div>
          <h1 className="text-3xl font-semibold mb-6">Your Cart</h1>
      </div>
       <Link className='mt-[10px] text-red-600 hover:text-blue-600'  to="/"><p>Back to dashboard</p></Link>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cart.map(item => (
              <li key={item.id} className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded"
                />
                <div className="flex-1">
                  <h2 className="font-semibold">{item.name}</h2>
                  <p>Qty: {item.quantity}</p>
                  <p>Price: ₹{item.price * item.quantity}</p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => updateQty(item.id, +1)}
                    className="px-3 py-1 bg-green-500 text-white rounded"
                  >
                    +
                  </button>
                  <button
                    onClick={() => updateQty(item.id, -1)}
                    className="px-3 py-1 bg-red-500 text-white rounded"
                  >
                    –
                  </button>
                </div>
                <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mt-6">Total: ₹{total}</h2>
           <button
             onClick={() => setShowSummary(true)}
              className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-lg"
             >
           Order Summary
         </button>
         {showSummary && (
        <>
          <div 
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowSummary(false)}
          />
          <div className="fixed right-0 top-0  h-full w-full bg-white shadow-lg p-6 transform transition-transform">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Order Summary</h2>
              <button onClick={() => setShowSummary(false)} className="text-2xl">×</button>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex items-center">
                <label>Discount %:</label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={discountPct}
                  onChange={e => setDiscountPct(parseFloat(e.target.value) || 0)}
                  className="w-16 ml-2 border p-1 rounded"
                />
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>-₹{discount.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between text-lg font-bold">
                <span>Grand Total</span>
                <span>₹{grandTotal.toFixed(2)}</span>
              </div>
              <button
             onClick={() => setCheckoutOpen(true)}
             className="w-full mt-4 py-2 bg-green-600 text-white rounded-lg"
              >
             Proceed to Checkout
             </button>
             {checkoutOpen && (
             <>
               <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setCheckoutOpen(false)} />

               <div className="fixed inset-0 flex items-center justify-center z-50">
               <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
               <h2 className="text-xl font-bold mb-4">Checkout</h2>
                 <div className="mb-4 border p-3 rounded bg-gray-50">
                  <p><strong>Total Items:</strong> {totalItems}</p>
                  <p><strong>Subtotal:</strong> ₹{subtotal.toFixed(2)}</p>
                 
                 <p><strong>Discount:</strong> -₹{discount.toFixed(2)}</p>
                <hr className="my-2" />
                <p className="font-semibold text-lg">Grand Total: ₹{grandTotal.toFixed(2)}</p>
               </div>
                <div className="mb-4">
                <label className="block text-sm font-medium">Customer Name (optional)</label>
                <input
                   type="text"
                   className="w-full border rounded p-2 mt-1"
                  value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                 />
              </div>

             <div className="mb-4">
                 <label className="block text-sm font-medium mb-1">Payment Mode</label>
                 <select
                className="w-full border rounded p-2"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                >
                <option>Cash</option>
                <option>UPI</option>
                 <option>Card</option>
              </select>
              </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={() => setCheckoutOpen(false)}
            className="px-4 py-2 text-gray-600 border rounded"
          >
            Cancel
          </button>
          
          <button
                  onClick={handleGenerate} 
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Generate Bill
                </button>
         </div>
        </div>
       </div>
       </>
      )}

      {showReceipt && (
        <>
          
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowReceipt(false)} />
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] pl-[30px] max-h-[90vh] overflow-auto">
              <div ref={receiptRef}>
               
                <h2 className="text-2xl font-bold mb-4 text-red-600">HolyCow Coffee House</h2>
                 <p className='font-bold mb-[5px]'>Receipt</p>
                <p><strong>Customer:</strong> {customerName || 'N/A'}</p>
                <p><strong>Payment Mode:</strong> {paymentMode}</p>
                <ul className="mt-4 space-y-2">
                  {cart.map(item => (
                    <li key={item.id} className="border-b pb-2">
                      {item.name} x {item.quantity} = ₹{item.price * item.quantity}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t pt-2">
                  <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
                  <p>Tax: ₹{tax.toFixed(2)}</p>
                  <p>Discount: -₹{discount.toFixed(2)}</p>
                  <p className="font-bold text-lg">Total: ₹{grandTotal.toFixed(2)}</p>
                </div>
              </div>

              <div className="mt-4 flex justify-between">
                 <button onClick={() => handlePrint()} className="bg-blue-600 text-white px-4 py-2 rounded">
              Print Bill
            </button>
                <button onClick={() => setShowReceipt(false)} className="px-4 py-2 text-gray-600 border rounded">Close</button>
                <button onClick={handleDownloadPDF} className="px-4 py-2 bg-green-600 text-white rounded">Download Receipt</button>
              </div>
            </div>
          </div>
        </>
      )}
    



            </div>
          </div>
        </>
      )}
        </>
      )}
      
    </div>
  );
};

export default MyCart;
