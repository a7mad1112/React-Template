import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div className=" header sticky-top bg-light shadow-sm">
            <div className=" container center">
                <Link to='/'>
                    <h2 className="p-0 m-0">FakeShop</h2>
                </Link>
            </div>
        </div>
    )
};
export default Header;