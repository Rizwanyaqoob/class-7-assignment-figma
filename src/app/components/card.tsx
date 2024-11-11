import React from "react";
const Card =()=>{
return(
    <div>
    <div className="w-[1046px] h-[292px] flex gap-[30px] mb-20">
        <div className="w-[328px] h-[292px] py-[35px] px-10 gap-5  bg-[#FFFFFF] shadow-lg shadow-black hover:scale-95 ">
<div className="w-[70px] h-[76px] rounded-[10px] py-[22px] px-[19px] gap-[10px] mb-5 bg-[#FFDCD1]"></div>
<h5 className="w-[135px] h-6 font-bold text-[16px] leading-6  mb-5 text-[#252B42] text-left">training Courses</h5>
 <div className="w-[50px] h-[2px] mb-5 bg-[#E74040]"></div>
 <p className="w-[222px] h-[60px] font-normal text-[14px] leading-5 tracking-[0.200px] text-left">The gradual accumulation of <br />information about atomic and <br /> small-scale behaviour...</p>
        </div>
        <div className="w-[328px] h-[292px] py-[35px] px-10 flex gap-[10] mb-5  shadow-lg shadow-[#00000012] bg-white hover:scale-95 flex-col" >
            <div className="w-[70px] h-[76px] rounded-[10px]  py-[22px] px-[19px] gap-[10px]   bg-[#B9EAA8]"></div>
        <h5 className="w-[168px] h-6 font-bold text-[16px] leading-24 mb-4 ">2,769 online courses</h5>
        <div className="w-[50px] h-[2px] bg-[#E74040] mb-4"></div>
        <p className="w-[222px] h-[60px] font-normal text-[14px] leading-5 tracking-[0.200px]">The gradual accumulation of information about atomic and small-scale behaviour...</p>
</div>
<div className="w-[328px] h-[292px] py-[35px] px-10 flex gap-[10] mb-5  shadow-lg shadow-[#00000012] bg-[#23A6F0] hover:scale-95 flex-col">
<div className="w-[70px] h-[76px] rounded-[10px] mb-4 py-[22px] px-[19px] gap-[10px] bg-white "></div>
<h5 className="w-[135px] h-6 font-bold text-[16px] leading-6 mb-4 ">training Courses</h5>
<div className="w-[50px] h-[2px] bg-white mb-4"></div>
<p className="w-[222px] h-[60px] font-normal text-[14px] leading-5">The gradual accumulation of information about atomic and small-scale behaviour...</p>
</div>
        
    </div>
    </div>
)
}
export default Card