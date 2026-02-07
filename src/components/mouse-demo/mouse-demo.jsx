import axios from "axios";
import { useEffect, useState } from "react"
import './mouse-demo.css';

export function MouseDemo(){

    const [mobiles, setMobiles ] = useState([{image:null}]);
    const [previewImage, setPreviewImage] = useState('mobile-1.png');

    function LoadMobiles(){
        axios.get('mobiles.json')
        .then(response=>{
            setMobiles(response.data);
        })
    }
    useEffect(()=>{
        LoadMobiles();
    },[])

    function handleMouseOver(e){
        setPreviewImage(e.target.src);
    }

    return(
        <div className="container-fluid p-3">
            <div className="row mt-4">
                <div className="col-2">
                    {
                        mobiles.map(mobile=>
                            <div key={mobile.image} className="my-4 mobile-container" style={{width:'100px'}}>
                                <img src={mobile.image} onMouseOver={handleMouseOver} width="100%" height="100" />
                            </div>
                        )
                    }
                </div>
                <div className="col-10">
                    <img width="400" height="500" src={previewImage}  />
                </div>
            </div>
        </div>
    )
}