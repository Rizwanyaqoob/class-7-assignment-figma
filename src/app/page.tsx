import React from "react";
import Navbar from "./components/navbar";
import Card from "./components/card";
const Home = () =>{
  return(
  <div>
    <Navbar/>
  <div className="w-[1046px] h-[780px] mt-[50px] ml-[197px] py-20 flex gap-20 flex-col justify-center items-center">
<div className="w-[699px] h-[496px] py-10 flex flex-col gap-10 justify-center items-center">
<h5 className="text-16 leading-[24px] tracking-widest text-[#23A6F0] font-bold">Welcome</h5>
<div className="w-[542px] h-[160px]">
  <h1 className="text-[58px] font-bold leading-[80px] tracking-[0.200px] text-center text-white">Selling on the internet like a pro</h1>
</div>
<div className="w-[536px] h-[60px] ">
  <h4 className="font-normal text-[20px] leading-[30px] tracking-[0.200px] text-center text-white">We know how large objects will act, but things on a <br />
  small scale just do not act that way.</h4>
</div>
<div className="w-[365px] h-[52px] flex flex-row gap-[10px]">
<button className="w-[193px] h-[52px] py-[15px] px-10 gap-[10px] font-bold text-[14px] leading-[22px] tracking-[0.200px] rounded-[5px] text-center text-white bg-[#23A6F0] hover:bg-blue-600 ">Get Quote Now</button>
<button className="w-[162px] h-[52px] rounded-[5] py-[15px] px-[40px] gap-[10px] border border-[#23A6F0] text-center leading-[22px] tracking-[0.200px] font-bold text-[14px] text-[#23A6F0] hover:bg-blue-100">Learn More</button>
</div>
</div>
<Card/>
  </div>
  </div>
  )
}

export default Home