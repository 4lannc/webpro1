// Import React
import React from 'react';
import Button from "./Componen/Atom (Elemen)/Input/Button/Index";

// App Component
export default function App() {
  return (
    <div className="flex justify-center min-h-screen items-center">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold mb-2 text-green-800">Login</h1>
        <p className="font-medium text-slate-500">
          Welcome, Please enter your details
        </p>
        <form action="">
          <div className="mb-6">
            <label 
              htmlFor="email" 
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label 
              htmlFor="password" 
              className="block text-slate-700 text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter your password"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-green-800 text-white py-2 rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}







// // Class Componen, Props, Children

// import React, { Component } from "react";

// // Functional Component Button
// function ButtonFunctional({ variant }) {
//   return (
//     <button
//       className={`h-10 px-6 font-semibold rounded-md ${variant} text-white hover:bg-yellow-400 transition duration-300`}
//       type="button"
//     >
//       Functional Button
//     </button>
//   );
// }

// // Class Component Button
// class ButtonClass extends Component {
//   render() {
//     const { variant } = this.props;
//     return (
//       <button
//         className={`h-10 px-6 font-semibold rounded-md ${variant} text-white hover:bg-yellow-400 transition duration-300`}
//         type="button"
//       >
//         Class Button
//       </button>
//     );
//   }
// }

// export default function App() {
//   return (
//     <div className="text-2xl flex justify-center bg-gray-200 min-h-screen items-center">
//       <div className="flex gap-4">
//         {/* Button Dengan Children */}
//         <button className="h-10 px-6 font-semibold rounded-md bg-sky-700 text-white hover:bg-yellow-400 transition duration-300">
//           Button Dengan Children
//         </button>

//         {/* Button Dengan Props */}
//         <button
//           className="h-10 px-6 font-semibold rounded-md bg-lime-800 text-white hover:bg-yellow-400 transition duration-300"
//           type="button"
//         >
//           Button Dengan Props
//         </button>

//         {/* Button Menggunakan Functional Component */}
//         <ButtonFunctional variant="bg-red-700" />

//         {/* Button Menggunakan Class Component */}
//         <ButtonClass variant="bg-amber-500" />
//       </div>
//     </div>
//   );
// }





// import React from "react";
// const Button = (props) => {
//     return (
//       <button
//       className={`h-10 px-6 font-semibold rounded-md ${props.variant} text-white`}
//       type="submit"
//       >
//         Korban Mahjong
//       </button>
//     );
//   };




// export default function App() {
//   return (
//     <div className="text-2xl flex justify-center bg-gray-200 min-h-screen items-center">
//       <div className="flex gap-x-3">
//        <Button variant="bg-violet-900"/>
//        <Button variant="bg-cyan-600"/>
//        <Button variant="bg-red-700"/>
//        <Button variant="bg-green-800"/>
//        <Button variant="bg-amber-500"/>
//       </div>
//     </div>
//   );
// }

// PERTAMA

// export default function App() {
//   return (
//     <div className="text-2xl flex justify-center bg-blue-400 min-h-screen items-center">
//       <div>
//         <button
//         className="h-10 px-6 font-semibold rounded-md bg-sky-950 text-white"
//         type="submit"
//         >
//           Korban Mahjong
//         </button>
//         <button
//         className="h-10 px-6 font-semibold rounded-md bg-sky-950 text-white"
//         type="submit"
//         >
//           Korban Mahjong
//         </button>
//         <button
//         className="h-10 px-6 font-semibold rounded-md bg-sky-950 text-white"
//         type="submit"
//         >
//           Korban Mahjong
//         </button>
//       </div>
//     </div>
//   )
// }



// function ButtonRed(){
//   return(
//     <button
//     className="h-10 px-6 font-semibold rounded-md bg-red-700 text-white"
//       type="submit"
//     >
//       Korban Mahjong
//     </button>
//   )
// }

// function ButtonBlue(){
//   return( 
//     <button
//     className="h-10 px-6 font-semibold rounded-md bg-cyan-600 text-white"
//       type="submit"
//     >
//       Korban Mahjong
//     </button>
//   )
// }
// function ButtonGren(){
//   return( 
//     <button
//     className="h-10 px-6 font-semibold rounded-md bg-green-800 text-white"
//       type="submit"
//     >
//       Korban Mahjong
//     </button>
//   )
// }
// function ButtonYelo(){
//   return( 
//     <button
//     className="h-10 px-6 font-semibold rounded-md bg-amber-500 text-white"
//       type="submit"
//     >
//       Korban Mahjong
//     </button>
//   )
// }