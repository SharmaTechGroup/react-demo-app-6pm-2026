import { useEffect, useState } from "react"
import axios from "axios";

export function Flipkart(){

    const [product, setProduct] = useState({title:null, price:0, image:null, rating:{rate:0, ratings:0, reviews:0}, offers:[]});

    function LoadData(){
        axios.get('product.json')
        .then(response=>{
            setProduct(response.data);
            console.log(response.status);
        })
        .catch(error=>{
            console.log(error);
        })
        .finally(()=>{
            console.log('Request End');
        })
    }
    useEffect(()=>{
        LoadData();
    },[])

    return(
        <div className="container-fluid">
          <div className="mt-4">
             <div className="row">
                <div className="col-3">
                    <img width="100%" src={product.image} />
                </div>
                <div className="col-9">
                    <div className="fs-5">{product.title}</div>
                    <div className="mt-2">
                        <span className="badge bg-success text-white rounded">{product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                        <span className="mx-2 text-secondary fw-bold"> {product.rating.ratings.toLocaleString('en-in')} ratings & {product.rating.reviews.toLocaleString('en-in')} reviews </span>
                    </div>
                    <div className="mt-3 fs-2 fw-bold">
                        {product.price.toLocaleString('en-in',{style:'currency', currency:'INR', minimumFractionDigits:0, maximumFractionDigits:0})}
                    </div>
                    <div className="mt-3">
                        <h5>Available Offers</h5>
                        <ul className="list-unstyled">
                            {
                                product.offers.map(offer=>
                                    <li className="bi bi-tag-fill text-success my-4" key={offer}><span className="text-secondary">{offer}</span></li>
                                )
                            }
                        </ul>
                    </div>
                </div>
             </div>
          </div>
        </div>
    )
}