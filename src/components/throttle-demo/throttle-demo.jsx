import { useEffect, useRef, useState } from "react"

export function ThrottleDemo(){

    
    const [milliSeconds, setMilliSeconds] = useState(0);
    const [seconds, setSeconds] = useState(0);
    
    let thread = useRef(null);
   
    let ms=0, sec=0, min=0, hrs=0;
    function StartWatch(){
        ms++;
        if(ms===999){
            ms=0;
            sec++;
            if(sec===59){
                min++;
                sec=0;
            }
        }
        setMilliSeconds(ms);
        setSeconds(sec);
    }

    function handleStartClick(){
        thread.current = setInterval(StartWatch,1);
    }

    function handleStopClick(){
        clearInterval(thread.current);
    }

    return(
        <div className="container-fluid text-center p-4">
            <div className="bg-primary p-4 text-white fw-bold fs-1 w-75 row">
                <div className="col">
                    00
                </div>
                <div className="col">
                    :
                </div>
                <div className="col">
                    00
                </div>
                <div className="col">
                   :
                </div>
                <div className="col">
                   {seconds}
                </div>
                <div className="col">
                   :
                </div>
                <div className="col">
                    {milliSeconds}
                </div>
                 <div className="mt-3 fs-5">
                <button onClick={handleStartClick} className="btn btn-light">Start</button>
                <button onClick={handleStopClick} className="btn btn-warning mx-2">Stop</button>
                </div>
            </div>
           
        </div>
    )
}