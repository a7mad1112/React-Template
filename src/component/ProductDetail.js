import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector} from 'react-redux';
import { selectedProducts } from "../redux/actions/productsActions";
const ProductDetail = () => {
    const product = useSelector(state => state.product);
    const {productId} = useParams();
    const dispatch = useDispatch();
    // console.log(productId)
    const fetchProductDetail = async () => {
        const res = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch(err => {
            // console.log('ERR', err);
        });
        dispatch(selectedProducts(res.data));
    }
    useEffect(() => {
        if(productId && product !== "") fetchProductDetail()
    }, [productId]);
    // console.log(product);
    return (
        <div className="container mb-4">
            { Object.keys(product).length === 0 || product.id != productId ? (
                <div className="spinner">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row justify-content-center mt-5">
                    <div className="card col-md-5 p-5 me-md-3">
                        <img className="w-75 ms-auto me-auto" src={product.image} alt={product.title}/>
                    </div>
                    <div className="card col-md-5 p-3 ms-md-3 mt-4 mt-md-0">
                        <h3> { product.title } </h3>
                        <button type="button" className="btn btn-danger mt-3 w-md-25 fw-bold fs-5">${ product.price }</button>
                        <input className="mt-3 form-control" type="text" placeholder={product.category} aria-label="Disabled input example" disabled></input>
                        <p className="mt-3 text-black-50">{ product.description }</p>
                    </div>
                </div>
            ) }
        </div>
    )
};
export default ProductDetail;