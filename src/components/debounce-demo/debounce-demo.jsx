import { useRef, useState } from "react"

export function DebounceDemo(){

    const [msg, setMsg] = useState('');

    let thread = useRef(null);

    function Level1(){
        setMsg('Volume Increased : 20%');
    }
    function Level2(){
        setMsg('Volume Increased : 70%');
    }
    function Level3(){
        setMsg('Volume Full');
    }
    function VolumeUpClick(){
        setTimeout(Level1, 3000);
        thread.current =  setTimeout(Level2, 6000);
        setTimeout(Level3, 10000);
    }
    function handleCancelClick(){
        alert('Canceled');
        clearTimeout(thread.current);
    }

    return(
        <div className="container-fluid p-4">
             <button onClick={VolumeUpClick} className="btn btn-warning bi bi-volume-up"></button>
             <button onClick={handleCancelClick} className="btn btn-danger mx-2">Cancel Level2</button>
             <p className="fs-4">{msg}</p>
        </div>
    )
}