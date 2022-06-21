import React from 'react'
import '../index.css'

const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-betweem items-center flex-col p-4 gradient-bg-footer">
      <div className="w-full sm:flex-row flex-col justify-between items-center my-4">
        <div className="flex flex-[0.5] justify-center items-center my-1">
          <h1 className="text-xl text-white w-32 cursor-pointer text-center">Utopia</h1>
        </div>
        <br />
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center">Come join Utopia</p>
        <p className="text-white text-sm text-center font-medium mt-2">info@Utopia.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-left text-xs">@Utopia2022</p>
        <p className="text-white text-right text-xs">All rights reserved</p>
      </div>
    </div>
  )
};

export default Footer