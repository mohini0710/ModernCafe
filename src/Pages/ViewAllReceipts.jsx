import React, { useState } from 'react';

const ViewAllReceipts = () => {
  const [receipts] = useState(() => {
    const saved = localStorage.getItem('receipts');
    return saved ? JSON.parse(saved) : [];
  });

  if (!receipts.length) {
    return <p className="text-center text-gray-500">No receipts found.</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Order History</h1>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Order ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Date</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Total</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Items</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {receipts.map((receipt) => (
              <tr key={receipt.id} className="border-t">
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{receipt.id}</td>
                <td className="px-6 py-4 text-sm text-gray-500">{receipt.customerName || 'N/A'}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {new Date(receipt.date).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">₹{receipt.total.toFixed(2)}</td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  <ul>
                    {receipt.items.map((item, index) => (
                      <li key={index}>
                        {item.name} (x{item.quantity}) - ₹{item.price.toFixed(2)}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllReceipts;
