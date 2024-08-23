import React, { useCallback, useEffect, useState } from "react";
import { FaHotel, FaDumbbell, FaGlobeAsia, FaCocktail, FaSpa, FaAngleLeft, FaAngleRight } from "react-icons/fa"
import { FaBasketShopping } from "react-icons/fa6"
import ExploreCity from "../components/ExploreCity";
import backgroundImage from '../assets/meta.jpg';


export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const iconFont = {
    fontSize: "56px"
  };

  const items = [
    { icon: <FaHotel />, label: "Restaurant" },
    { icon: <FaBasketShopping />, label: "Shopping" },
    { icon: <FaDumbbell />, label: "Fitness" },
    { icon: <FaGlobeAsia />, label: "Travelling" },
    { icon: <FaCocktail />, label: "Nightlife" },
    { icon: <FaSpa />, label: "Beauty" }
  ];

  const showNext = useCallback(() => {
    if (currentIndex < items.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
    else {
      setCurrentIndex(0);
    }
  }, [currentIndex, items.length]);

  const showPrevios = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(items.length - 3);
    }
  };

  useEffect(() => {
    const interval = setInterval(showNext, 2000);
    return () => clearInterval(interval);
  }, [currentIndex, showNext]);


  return (
    // <div className="h-full w-full flex flex-col justify-between bg-cover bg-center" style={{
    //   backgroundImage: 'url(https://cdnb.artstation.com/p/assets/covers/images/035/208/137/large/ideun-kim-ideun-kim-commerce-detail-planet03-a.jpg?1614363356)'
    // }}
    // >
    <div
        className="h-full w-full flex flex-col justify-between bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
      <ExploreCity />

      {/* <div className="absolute left-1/2 h-30 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded shadow-lg flex gap-8 items-center justify-center"> */}
      <div className="bg-white rounded shadow-lg flex gap-8 items-center justify-center">

        <button onClick={showPrevios} className="bg-gray-300 rounded-full hover:bg-red-500 w-10 h-10 flex items-center justify-center m-2"><FaAngleLeft /></button>
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div key={index} className="flex flex-col gap-2 h-30 w-52 items-center justify-center border-y-black py-0  hover:bg-gray-300">
            {React.cloneElement(item.icon, { style: iconFont, className: "text-blue-400 text-2xl pt-4 pb-2" })}
            <p className="pb-4">{item.label}</p>
          </div>
        ))}

        <button onClick={showNext} className="bg-gray-300 rounded-full hover:bg-red-500 w-10 h-10 flex items-center justify-center m-2"><FaAngleRight /></button>


        {/* <div className="flex flex-col gap-2 h-30 w-52 items-center justify-center border-y-black py-0  hover:bg-gray-300">
             <FaHotel style={iconFont} className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Restuarant</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaBasketShopping style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Shopping</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaDumbbell style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Fitness</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaGlobeAsia style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Travelling</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaCocktail style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Nightlife</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaSpa style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Beauty</p>
          </div>      */}
      </div>
    </div>
  )

  return (
    <>
      {/*  .....................
        main div with search bar
           .....................
      */}
      <div className="h-full bg-cover bg-center" style={{
        backgroundImage: 'url(https://cdnb.artstation.com/p/assets/covers/images/035/208/137/large/ideun-kim-ideun-kim-commerce-detail-planet03-a.jpg?1614363356)'
      }}>
        <ExploreCity />
        {/* <SearchResults/> */}

      </div>


      {/* ....................................
         overlapping div component with crousel
          .....................................
       */}
      {/* <ExploreCity/> */}

      <div className="absolute left-1/2 h-30 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white rounded shadow-lg flex gap-8 items-center justify-center">

        <button onClick={showPrevios} className="bg-gray-300 rounded-full hover:bg-red-500 w-10 h-10 flex items-center justify-center m-2"><FaAngleLeft /></button>
        {items.slice(currentIndex, currentIndex + 3).map((item, index) => (
          <div key={index} className="flex flex-col gap-2 h-30 w-52 items-center justify-center border-y-black py-0  hover:bg-gray-300">
            {React.cloneElement(item.icon, { style: iconFont, className: "text-blue-400 text-2xl pt-4 pb-2" })}
            <p className="pb-4">{item.label}</p>
          </div>
        ))}

        <button onClick={showNext} className="bg-gray-300 rounded-full hover:bg-red-500 w-10 h-10 flex items-center justify-center m-2"><FaAngleRight /></button>


        {/* <div className="flex flex-col gap-2 h-30 w-52 items-center justify-center border-y-black py-0  hover:bg-gray-300">
             <FaHotel style={iconFont} className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Restuarant</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaBasketShopping style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Shopping</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaDumbbell style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Fitness</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaGlobeAsia style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Travelling</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaCocktail style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Nightlife</p>
          </div>
          <div className="flex flex-col gap-2 items-center justify-center h-30 w-52 border-y-black hover:bg-gray-300">
             <FaSpa style={iconFont}  className="text-blue-400 text-2xl pt-4 pb-2"/>
             <p className="pb-4">Beauty</p>
          </div>      */}
      </div>
    </>
  )
}
