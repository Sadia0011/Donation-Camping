import PropTypes from 'prop-types'
import { Link,  } from 'react-router-dom';
import { BsCurrencyDollar } from 'react-icons/bs';
const DisplayDonation = ({donation}) => {
     // const {picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price}=donationData;
 const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,price}=donation;
   


 return (
            <div style={{backgroundColor:category_bg_color}}
            className="relative flex  flex-row mt-10 h-52 rounded-xl shadow-md">
  <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none">
    <img src={picture} alt="image" className="h-full w-56 object-cover"/>
  </div>
  <div  className="p-2 text-left ">
  <h5 className="mt-2 block text-sm font-medium ">
    <span style={{backgroundColor:text_button_bg_color,borderRadius:"8px",padding:"10px"}}>{category}</span></h5>
 <h2 className="mt-3 block text-2xl font-semibold text-black">{title}</h2>
 <h5 style={{color:card_bg_color}} className="flex mr-1 items-center mb-3 block text-base font-semibold">
    <BsCurrencyDollar></BsCurrencyDollar>{price}</h5>
    <Link to={`/donationId/${id}`} className="inline-block" >
       <button  className="btn border-none " style={{backgroundColor:card_bg_color,color:"white"}}>View Details</button>
          
    </Link>
  </div>
  
</div>
    );
};
DisplayDonation.propTypes={
    donation:PropTypes.object
}
export default DisplayDonation;