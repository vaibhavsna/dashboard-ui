// 'use client';

// import React from 'react';

// const data = [
//   {
//     name: 'Protein Bar 100g',
//     checked: true,
//     highlight: true,
//     availability: {
//       sales: '₹93,132.12',
//       outOfStock: '1.68%',
//       totalInventory: '931.9',
//     },
//     visibility: {
//       rank: '3.2',
//       traffic: '12,303',
//       impressions: '25,005',
//     },
//   },
//   {
//     name: 'Choco Bar 100g',
//     checked: true,
//     highlight: true,
//     availability: {
//       sales: '₹8,526.32',
//       outOfStock: '6.79%',
//       totalInventory: '679',
//     },
//     visibility: {
//       rank: '7',
//       traffic: '3005',
//       impressions: '4231',
//     },
//     change: {
//       sales: '2.4%',
//       outOfStock: '2.4%',
//       rank: '2.4%',
//       traffic: '2.4%',
//       impressions: '2.4%',
//     },
//   },
//   {
//     name: '',
//     checked: false,
//     availability: {
//       sales: '₹7,012.72',
//       outOfStock: '3.28%',
//       totalInventory: '328',
//     },
//     visibility: {
//       rank: '4',
//       traffic: '2960',
//       impressions: '3657',
//     },
//   },
//   {
//     name: 'SKU 3',
//     checked: false,
//     availability: {
//       sales: '₹9313',
//       outOfStock: '1.68%',
//       totalInventory: '931.9',
//     },
//     visibility: {
//       rank: '11',
//       traffic: '1931.9',
//       impressions: '₹931.9',
//     },
//   },
//   {
//     name: 'SKU 4',
//     checked: false,
//     availability: {
//       sales: '₹0',
//       outOfStock: '0',
//       totalInventory: '0',
//     },
//     visibility: {
//       rank: '0',
//       traffic: '₹0',
//       impressions: '0',
//     },
//   },
// ];

// const totalRow = {
//   availability: {
//     sales: '₹2,93,132.12',
//     outOfStock: '16%',
//     totalInventory: '2931',
//   },
//   visibility: {
//     rank: '8.3',
//     traffic: '61,985',
//     impressions: '2,61,768',
//   },
// };

// const DataTable = () => {
//   return (
//     <div className="overflow-x-auto rounded-xl text-sm">
//       <table className="min-w-full divide-y divide-gray-200">
//         {/* Header with white background */}
//         <thead className="bg-white text-left text-gray-500 border-2 border-gray-100 shadow-sm">
//           <tr className='border-2 border-gray-100 shadow-sm'>
//             <th className="px-4 py-3">SKU Name</th>
//             <th className="px-4 py-3" colSpan="3">Availability</th>
//             <th className="px-4 py-3" colSpan="3">Visibility</th>
//           </tr>
//           <tr className="text-xs text-gray-400 border-2 border-gray-100 shadow-sm ">
//             <th className="px-4 py-2"></th>
//             <th className="px-4 py-2">Sales</th>
//             <th className="px-4 py-2">Out of Stock</th>
//             <th className="px-4 py-2">Total Inventory</th>
//             <th className="px-4 py-2">Average Rank</th>
//             <th className="px-4 py-2">Est. Traffic</th>
//             <th className="px-4 py-2">Est. Impressions</th>
//           </tr>
//         </thead>

//         <tbody className="text-gray-700">
//           {data.map((item, idx) => (
//             <tr
//               key={idx}
//               className={`hover:bg-gray-50 ${item.highlight ? 'bg-gray-100' : 'bg-white'}`}
//             >
//               <td className="px-4 py-2 whitespace-nowrap flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   checked={item.checked}
//                   readOnly
//                   className="accent-green-600"
//                 />
//                 {item.name && <span>{item.name}</span>}
//               </td>
//               <td className="px-4 py-2">{item.availability.sales}</td>
//               <td className="px-4 py-2">{item.availability.outOfStock}</td>
//               <td className="px-4 py-2">{item.availability.totalInventory}</td>
//               <td className="px-4 py-2">{item.visibility.rank}</td>
//               <td className="px-4 py-2">{item.visibility.traffic}</td>
//               <td className="px-4 py-2">{item.visibility.impressions}</td>
//             </tr>
//           ))}

//           {/* Change Row */}
//           <tr className="text-green-600 text-xs font-medium bg-white">
//             <td className="px-4 py-2"></td>
//             <td className="px-4 py-2">↑ 2.4%</td>
//             <td className="px-4 py-2">↑ 2.4%</td>
//             <td className="px-4 py-2">-</td>
//             <td className="px-4 py-2">↑ 2.4%</td>
//             <td className="px-4 py-2">↑ 2.4%</td>
//             <td className="px-4 py-2">↑ 2.4%</td>
//           </tr>
//         </tbody>

//         <tfoot className="bg-gray-50 text-gray-800 font-medium">
//           <tr>
//             <td className="px-4 py-2">Total</td>
//             <td className="px-4 py-2">{totalRow.availability.sales}</td>
//             <td className="px-4 py-2">{totalRow.availability.outOfStock}</td>
//             <td className="px-4 py-2">{totalRow.availability.totalInventory}</td>
//             <td className="px-4 py-2">{totalRow.visibility.rank}</td>
//             <td className="px-4 py-2">{totalRow.visibility.traffic}</td>
//             <td className="px-4 py-2">{totalRow.visibility.impressions}</td>
//           </tr>
//         </tfoot>
//       </table>
//     </div>
//   );
// };

// export default DataTable;


'use client';

import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const data = [
  {
    name: 'Protein Bar 100g',
    checked: true,
    availability: {
      sales: '₹93,132.12',
      outOfStock: '1.68%',
      totalInventory: '931.9',
    },
    visibility: {
      rank: '3.2',
      traffic: '12,303',
      impressions: '25,005',
    },
  },
  {
    name: 'Choco Bar 100g',
    checked: true,
    availability: {
      sales: '₹8,526.32',
      outOfStock: '6.79%',
      totalInventory: '679',
    },
    visibility: {
      rank: '7',
      traffic: '3005',
      impressions: '4231',
    },
  },
  {
    name: '',
    checked: false,
    availability: {
      sales: '₹7,012.72',
      outOfStock: '3.28%',
      totalInventory: '328',
    },
    visibility: {
      rank: '4',
      traffic: '2960',
      impressions: '3657',
    },
  },
  {
    name: 'SKU 3',
    checked: false,
    availability: {
      sales: '₹9313',
      outOfStock: '1.68%',
      totalInventory: '931.9',
    },
    visibility: {
      rank: '11',
      traffic: '1931.9',
      impressions: '₹931.9',
    },
  },
  {
    name: 'SKU 4',
    checked: false,
    availability: {
      sales: '₹0',
      outOfStock: '0',
      totalInventory: '0',
    },
    visibility: {
      rank: '0',
      traffic: '₹0',
      impressions: '0',
    },
  },
];

const totalRow = {
  availability: {
    sales: '₹2,93,132.12',
    outOfStock: '16%',
    totalInventory: '2931',
  },
  visibility: {
    rank: '8.3',
    traffic: '61,985',
    impressions: '2,61,768',
  },
};

const DataTable = () => {
  return (
    <div className=" text-sm font-medium">
      <div className="">
        <table className="min-w-full border-separate border-spacing-y-1 border-2 rounded-lg">
          <thead className="bg-white">
            <tr className="text-gray-500 text-left">
              <th className="px-4 py-2">SKU Name</th>
              <th className="px-4 py-2" colSpan="3">Availability</th>
              <th className="px-4 py-2" colSpan="3">Visibility</th>
              <th></th>
            </tr>
            <tr className="text-gray-400 text-xs text-left">
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Sales</th>
              <th className="px-4 py-2">Out of Stock</th>
              <th className="px-4 py-2">Total Inventory</th>
              <th className="px-4 py-2">Average Rank</th>
              <th className="px-4 py-2">Est. Traffic</th>
              <th className="px-4 py-2">Est. Impressions</th>
              <th className="px-4 py-2">CTR</th>
            </tr>
          </thead>
          <tbody className="text-gray-800">
            {data.map((item, idx) => (
              <tr key={idx} className={`${idx < 2 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="px-4 py-2 flex items-center gap-2">
                  <input type="checkbox" checked={item.checked} readOnly className="accent-green-600" />
                  {item.name && <span>{item.name}</span>}
                </td>
                <td className="px-4 py-2">{item.availability.sales}</td>
                <td className="px-4 py-2">{item.availability.outOfStock}</td>
                <td className="px-4 py-2">{item.availability.totalInventory}</td>
                <td className="px-4 py-2">{item.visibility.rank}</td>
                <td className="px-4 py-2">{item.visibility.traffic}</td>
                <td className="px-4 py-2">{item.visibility.impressions}</td>
                <td className="px-4 py-2">1.98%</td>
              </tr>
            ))}
            <tr className="text-green-600 text-xs">
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">↑ 2.4%</td>
              <td className="px-4 py-2">↑ 2.4%</td>
              <td className="px-4 py-2">-</td>
              <td className="px-4 py-2">↑ 2.4%</td>
              <td className="px-4 py-2">↑ 2.4%</td>
              <td className="px-4 py-2">↑ 2.4%</td>
              <td className="px-4 py-2 text-red-400">↓</td>
            </tr>
          </tbody>
          <tfoot className="bg-white text-gray-800 font-medium">
            <tr>
              <td className="px-4 py-2">Total</td>
              <td className="px-4 py-2">{totalRow.availability.sales}</td>
              <td className="px-4 py-2">{totalRow.availability.outOfStock}</td>
              <td className="px-4 py-2">{totalRow.availability.totalInventory}</td>
              <td className="px-4 py-2">{totalRow.visibility.rank}</td>
              <td className="px-4 py-2">{totalRow.visibility.traffic}</td>
              <td className="px-4 py-2">{totalRow.visibility.impressions}</td>
              <td className="px-4 py-2">1.98%</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
