/* eslint-disable no-unused-vars */
import { data } from 'autoprefixer';
import PropTypes from 'prop-types'
// import { useEffect, useState } from 'react';


const Banner = ({donationDatas}) => {
  // const  [displayInput,setDisplayInput]= useState([])
  // const [input,setInput]=useState(null);
  //   useEffect(()=>{
  //     setDisplayInput(donationDatas);
  //   },[donationDatas])
  //   const handleInput=e=>{
  //       setInput(e.target.value);
  //       // console.log(e.target.value)
  //   }
  //   const handleSearch=()=>{
  //     // console.log("filtering")
  //       if(!input){
  //           setDisplayInput(displayInput);
  //       }
  //       else {
  //         const searchInput=donationDatas.filter(data=>data.category.toLowerCase()=== input.toLowerCase());
  //         // console.log(searchInput)
  //         setDisplayInput(searchInput)
  //   }
    
  // }
    return (
        <div className="hero h-[70vh] " style={{backgroundImage: 'url(https://i.ibb.co/gTL1Myy/Rectangle-4287.png)'}}>
        <div className="hero-overlay bg-opacity-60 bg-white"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="">
            <h1 className="mb-5 text-4xl font-bold text-black">I Grow By Helping People In Need</h1>
           <div className=" flex items-center justify-center">
            
           <input 
          //  onChange={handleInput}  
           type="text" placeholder="Search here..." className="p-3 w-full max-w-xs text-black" />            
           <button 
          //  onClick={handleSearch} 
           className="btn bg-[#FF444A] rounded  text-white border-none text-center text-base font-semibold">Search</button>
           </div>

          </div>
        </div>
      </div>
    );
};

Banner.propTypes={
  donationDatas:PropTypes.array
}
export default Banner;