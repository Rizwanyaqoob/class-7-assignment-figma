import React from "react"
import Link from "next/link" 
const Navbar = () =>{
return(
<>
<div className="w-[1322px] h-[91px] ml-[59px] mx-auto flex">
<div className="w-[187px] h-[58px] mt-[17px] ml-[136px] text-bold">
<h3 className="mt-[17px] h-8 w-[152px] font-bold text-2xl leading-8 text-white">BrandName</h3>
</div>
<div className="w-[815px] h-[58px] mt-4 ml-[100px] py-3 flex justify-between items-center  ">
<div className="w-[275px] h-6 mt-[17px]">
    <ul className="flex gap-[21px] text-white">
        <li className="hover:text-[#23A6F0]"><Link href="#">Home</Link></li>
        <li className="hover:text-[#23A6F0]"><Link href="#">Product</Link></li>
        <li className="hover:text-[#23A6F0]"><Link href="#">Pricing</Link></li>
        <li className="hover:text-[#23A6F0]"><Link href="#">Contact</Link></li>
    </ul>
</div>
<div className="w-[189px] h-[52px] mt-3 flex  items-center gap-[45px]">
    <div>
        <button className="w-[41px] h-[22px] font-bold text-sm text-white hover:text-[#23A6F0]">Login</button>
    </div>
    <div>
        <button className="w-[110px] h-[52px] rounded-[5px] py-[15px] px-[25px] gap-[15px] text-[14px] font-bold leading-[22px] bg-[#23A6F0] hover:bg-[#3990c2] text-white">JOIN US</button>
    </div>
</div>
</div>
</div>
</>
)
}

export default Navbar













