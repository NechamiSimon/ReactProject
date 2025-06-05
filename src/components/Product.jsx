import * as React from 'react';
import loadingIcon1 from '../assets/icons8-loading (2).gif'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataAsyncAction } from "../redux/thunk";
import { useNavigate } from 'react-router-dom';
import ShowProduct from './ShowProduct';
import '../components/card.css'


const Product = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const current = useSelector(state => state.current);
    const products = useSelector(state => state.products.productsList);
    const loading = useSelector(state => state.products.loading)
    const error = useSelector(state => state.products.error);

    useEffect(() => {
        dispatch(fetchDataAsyncAction())
    }, [])

    useEffect(() => {
        if (error) {
            navigate("/error")
        }

    }, [error])


    return (

        <>

            {loading && <img src={loadingIcon1} alt="Loading" width="250px" height="250px" id="lod" />}

            < div className="container align-items-start p-0" >
                <div className="row align-items-start mb-4">
                    <div className="col-6">

                    </div>
                </div>

                <div className="row" >
                    {products.length > 0 &&
                        products.map(p => (
                            <ShowProduct key={p.id} p={p} />
                        ))}
                </div>
            </ div>

        </>

    )
}

export default Product;
