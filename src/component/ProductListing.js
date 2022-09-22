import React from "react";
import ProductComponent from "./ProductComponent";
const ProductListing = () => {
    return (
        <div className=" pt-5 container ">
            <h2 className="mb-4"> Our Products </h2>
            <ProductComponent/>
        </div>
    );
};
export default ProductListing;