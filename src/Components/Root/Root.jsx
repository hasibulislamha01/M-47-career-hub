import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Header/Nav";

const Root = () => {
    return (
        <div>
            <div>
                <Nav></Nav>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Root;