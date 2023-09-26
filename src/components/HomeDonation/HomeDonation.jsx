import HomeDonationData from "../HomeDonationData/HomeDonationData";
import PropTypes from 'prop-types'

const HomeDonation = ({donationDatas }) => {
    return (
        <div className="mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 container mx-auto" >
                {
                    donationDatas.map(donationData=><HomeDonationData key={donationData.id} donationData={donationData}></HomeDonationData>)
                }
            </div>
        </div>
    );
};
HomeDonation.propTypes={
    donationDatas:PropTypes.array
}
export default HomeDonation;