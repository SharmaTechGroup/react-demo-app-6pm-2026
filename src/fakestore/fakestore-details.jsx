import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from "axios";


export function FakestoreDetails(){

    let params = useParams();
    const [product, setProduct] = useState({id:0,title:null, price:0, image:null, description:null, category:null, rating:{rate:0, count:0}});

    function LoadProduct(){
        axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    useEffect(()=>{
        LoadProduct();
    },[params.id])

    return(
        <div className="container-fluid mt-4">
            <h4>Details</h4>
            <dl>
                <dt>Title</dt>
                <dd>{product.title}</dd>
                <dt>Preview</dt>
                <dd>
                    <img src={product.image} width="200" height="200" />
                </dd>
                <dt>Price</dt>
                <dd>{product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}</dd>
            </dl>
        </div>
    )
}