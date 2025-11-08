// export default function ProductCard({userInfo}) {
//     // console.log(props);
    
//   return (
//     <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
//       <img
//         src="https://images.unsplash.com/photo-1618354691373-d851c8c27d52"
//         alt="Sneakers"
//         className="w-full h-56 object-cover"
//       />

//       <div className="p-6">
//         <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
//           {userInfo}
//         </h3>
//         <p className="text-gray-600 text-sm mb-4">
//           Lightweight running shoes designed for comfort and speed.
//         </p>

//         <div className="flex items-center justify-between">
//           <span className="text-lg font-bold text-gray-900">₹6,499</span>
//           <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
//             {userInfo}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }





export default function Card1({userInfo}) {
    // console.log(props);
    console.log(userInfo);
    
    
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1618354691373-d851c8c27d52"
        alt="Sneakers"
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2 ">
          {userInfo.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4">
          Lightweight running shoes designed for comfort and speed.
        </p>

        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">₹6,499</span>
          <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
            {userInfo.age}
          </button>
        </div>
      </div>
    </div>
  );
}
