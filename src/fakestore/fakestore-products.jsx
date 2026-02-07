import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";


export function FakestoreProducts(){

    let params = useParams();

    const [products, setProducts] = useState([{id:0,title:null, price:0, image:null, description:null, category:null, rating:{rate:0, count:0}}]);

    function LoadProducts(){
        axios.get(`https://fakestoreapi.com/products`)
        .then(response=>{
            setProducts(response.data.filter(product=> product.category===params.category));
        })
    }

    useEffect(()=>{
        LoadProducts();
    },[])

    return(
        <div className="container-fluid mt-4">
            <h4>Products</h4>
            <div className="row">
                <div className="col-6">
                        <div className="d-flex flex-wrap flex-row" style={{width:'600px'}}>
                            {
                            products.map(product=>
                                <div className="card m-2 p-2" style={{width:'130px'}} key={product.id}>
                                    <div className="card-header">
                                        <img className="card-img-top" src={product.image} height="50" />
                                    </div>
                                    <div className="card-footer">
                                        <Link to={`details/${product.id}`} className="btn btn-dark w-100" > Details </Link>
                                    </div>
                                </div>
                            )
                            }
                        </div>
                </div>
                <div className="col-6">
                        <Outlet />
                        
                </div>
            </div>
            <Link to="/">Back to Categories</Link>
        </div>
    )
}