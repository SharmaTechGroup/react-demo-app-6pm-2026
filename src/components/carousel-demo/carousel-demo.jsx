import axios from "axios";
import { useEffect, useRef, useState } from "react"

export function CarouselDemo(){

    const [product, setProduct] = useState({id:0, title:null, image:null, category:null, description:null, price:0, rating:{rate:0, count:0}});
    const [status, setStatus] = useState('');

    let ProductId = useRef(1);
    let thread = useRef(null);

    function LoadProductManually(id)
    {
        axios.get(`https://fakestoreapi.com/products/${id}`)
        .then(response=>{
            setProduct(response.data);
        })
    }

    function LoadProductAuto(){
        ProductId.current = ProductId.current + 1;
        LoadProductManually(ProductId.current);
    }

    function handlePlayClick(){
       thread.current =  setInterval(LoadProductAuto, 5000);
       setStatus('Slide Show - Started');
    }
    function handlePauseClick(){
        clearInterval(thread.current);
        setStatus('Slide Show - Paused');
    }

    function handleNextClick(){
        ProductId.current = ProductId.current + 1;
        LoadProductManually(ProductId.current);
        setStatus('Slide Show - Manual');
    }
    function handlePrevClick(){
        ProductId.current = ProductId.current - 1;
        LoadProductManually(ProductId.current);
        setStatus('Slide Show - Manual');
    }

    function handleSkeebarChange(e){
        ProductId.current = e.target.value;
        LoadProductManually(ProductId.current);
    }

    useEffect(()=>{
        LoadProductManually(1);
    },[])


    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="card mt-3 p-2 w-50">
                <div className="card-header text-center overflow-auto" style={{height:'80px'}}>
                    {product.title}
                    <div className="fw-bold">
                        {status}
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handlePrevClick} className="bi btn btn-dark bi-chevron-left"></button>
                        </div>
                        <div className="col-10 position-relative">
                            <div className="badge bg-danger text-white rounded rounded-circle p-3 fs-5 position-absolute top-0 end-0">{product.price.toLocaleString('en-us', {style:'currency', currency:'USD'})}</div>
                            <img width="100%" src={product.image} height="300" />
                            <div>
                                <input value={ProductId.current} onChange={handleSkeebarChange} className="form-range" type="range" min="1" max="20" />
                            </div>
                        </div>
                        <div className="col-1 d-flex flex-column justify-content-center align-items-center">
                            <button onClick={handleNextClick} className="bi btn btn-dark bi-chevron-right"></button>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-center">
                    <button onClick={handlePlayClick} className="btn btn-warning bi bi-play"></button>
                    <button onClick={handlePauseClick} className="btn btn-danger bi bi-pause mx-2"></button>
                </div>
            </div>
        </div>
    )
}