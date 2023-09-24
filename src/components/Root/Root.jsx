import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="font">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;