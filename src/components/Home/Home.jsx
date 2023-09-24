import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import HomeDonation from "../HomeDonation/HomeDonation";


const Home = () => {
    const donationDatas=useLoaderData()
    return (
        <div className="font">
            <Banner></Banner>
            <HomeDonation donationDatas={donationDatas}></HomeDonation>
        </div>
    );
};

export default Home;