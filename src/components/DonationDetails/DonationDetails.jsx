/* eslint-disable react/prop-types */
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { BsCurrencyDollar } from 'react-icons/bs';
import "./DonationDetails.css"
import { saveDataInLocalStorage } from "../../Utility/LocalStorage";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const DonationDetails = () => {
    const allData=useLoaderData();
    const {id}=useParams()
    const idInt=parseInt(id)
//    console.log(allData)
   const selectedData=allData.find(data=>data.id== idInt)
    console.log(selectedData)
   const navigate=useNavigate();
    const handleGoBack=()=>{
        navigate(-1);
    }
    const btnBgColor=selectedData.card_bg_color;
  
    const handleDonation=()=>{
        saveDataInLocalStorage(idInt);
        toast("Congratulations,you have donated successfully")
    }


    return (
        <div className="flex flex-col justify-center items-center  max-w-4xl mx-auto mt-5">
           <div className="relative ">
           <img src={selectedData.picture} className=" w-[700px] h-full " alt="" />
           <div className=" btn-overlay"></div>
           <Link>
          <div className="absolute bottom-10  left-6 ">
          <button onClick={handleDonation} className="btn border-none " style={{backgroundColor:btnBgColor,color:"white"}}>Donate <span className="flex"><BsCurrencyDollar></BsCurrencyDollar>{selectedData.price}</span></button>
          
          </div>
           </Link>
           </div>
           <h2 className="text-4xl font-bold my-5 text-center">{selectedData.title}</h2>
           <h2 className="text-base font-normal text-left">{selectedData.description}</h2>
           <button onClick={handleGoBack} className="btn  text-center mt-3" style={{backgroundColor:btnBgColor,color:"white"}}>Go Back </button>
           <ToastContainer />
        </div>
    );
};

export default DonationDetails;