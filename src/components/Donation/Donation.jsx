import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDataFromLocalStorage } from "../../Utility/LocalStorage";
import DisplayDonation from "../DisplayDonation/DisplayDonation";

const Donation = () => {
    const donation=useLoaderData();
    const[displayDonation,setDisplayDonation]=useState([]);
    const [dataDisplayLength,setDataDisplayLength]=useState(4);

   useEffect(()=>{
    const storedData=getStoredDataFromLocalStorage();
    if(donation.length > 0){
        const giveDonation=donation.filter(data=>storedData.includes(data.id))
        console.log(giveDonation)
   setDisplayDonation(giveDonation)
    }
        
   },[])
   
  
    return (
<div>
        
<div className="grid grid-cols-1 gap-6 container mx-auto lg:grid-cols-2 ">
    {
        displayDonation.slice(0,dataDisplayLength).map(donation=><DisplayDonation key={donation.id}donation={donation}></DisplayDonation>)
    }
</div>
    <div className="flex justify-center items-center">
    <div  className={dataDisplayLength==displayDonation.length && 'hidden'}>
    <button onClick={()=>setDataDisplayLength(displayDonation.length)} 
    className="btn border-none text-white bg-green-700 mt-8 mx-auto" > See All</button>
    </div>
    </div>
       
</div>
        
    );
};

export default Donation;