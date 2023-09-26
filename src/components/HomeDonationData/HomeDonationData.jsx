import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const HomeDonationData = ({donationData}) => {
    // const {picture,title,category,category_bg_color,card_bg_color,text_button_bg_color,description,price}=donationData;
    const {id,picture,title,category,category_bg_color,card_bg_color,text_button_bg_color}=donationData;
    return (
        <div>
            <Link to={`/donationId/${id}`}>
        <div className="relative flex flex-col h-[340px] rounded-xl bg-clip-border shadow-md"
        style={{color:card_bg_color , backgroundColor:category_bg_color}}>
            <img src={picture} className='h-56' alt="img-blur-shadow" />
            <div className="p-6">
              <h5 className="mb-2 block text-sm font-medium "><span style={{backgroundColor:text_button_bg_color,borderRadius:"8px",padding:"10px"}}>{category}</span></h5>
              <h3 className="block mt-2 text-lg font-semibold">{title}</h3>
            </div>
        </div>
            </Link>
        </div>
    );
};
HomeDonationData.propTypes={
    donationData:PropTypes.object
}
export default HomeDonationData;