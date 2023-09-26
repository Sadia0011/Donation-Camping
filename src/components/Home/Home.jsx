import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeDonation from "../HomeDonation/HomeDonation";
import { useState,useEffect } from "react";


const Home = () => {
    const donationDatas=useLoaderData()
    const  [displayInput,setDisplayInput]= useState([])
    const [input,setInput]=useState(null);
      useEffect(()=>{
        setDisplayInput(donationDatas);
      },[donationDatas])
      const handleInput=e=>{
          setInput(e.target.value);
        //   console.log(e.target.value)
      }
      const handleSearch=()=>{
        // console.log("filtering")
          if(!input){
              setDisplayInput(donationDatas);
          }
          else {
            const searchInput=donationDatas.filter(data=>data.category.toLowerCase()=== input.toLowerCase());
            console.log(searchInput)
            setDisplayInput(searchInput)
      }
      console.log(input,displayInput)
    }
    return (
        <div className="font">
            <Banner donationDatas={donationDatas}
            handleInput={handleInput}
            handleSearch={handleSearch}></Banner>
            <HomeDonation donationDatas={displayInput}
           ></HomeDonation>
        </div>
    );
};

export default Home;