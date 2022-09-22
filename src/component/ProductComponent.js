import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';
import axios from "axios";
import { Link } from "react-router-dom";
import './product.css'
const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products);
    const dispatch = useDispatch();
    // console.log(products)
    const fetchProducts = async () => {
        const res = await axios
        .get('https://fakestoreapi.com/products')
        .catch(err => {
            console.log('ERR', err)
        });
        dispatch(setProducts(res.data));
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    // console.log(products);
    const renderList = products.map(prod => {
        return (
            <div className="mb-5 card col-sm-12 col-md-4 col-lg-3 p-4" key={prod.id}>
                <div className="image w-100 h-50"> <img className="w-100 h-100" src={prod.image} alt={prod.title}/> </div>
                <h5 className="mt-3"> { prod.title } </h5>
                <div className="mt-auto mb-2">
                    <h5 className="bg-danger pt-2 pb-2 text-center text-white"> { prod.price }$ </h5>
                    <span className=" text-black-50 "> { prod.category } </span>
                    <Link to={`product/${prod.id}`}> Show Details </Link>
                </div>
            </div>
        )
    });
    return (
        <div className="prodcut-list">
                <div className="row cards">
                    {renderList}
                </div>
        </div>
    );
};
export default ProductComponent;


