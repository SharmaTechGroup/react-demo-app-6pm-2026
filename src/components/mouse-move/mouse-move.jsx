import { useState } from "react"

export function MouseMove(){

    const [styleObj, setStyleObject] = useState({position:'fixed', top:'', left:''});

    function handleMouseMove(e){
        setStyleObject({position:'fixed', top:`${e.clientY}px`, left:`${e.clientX}px`});
    }

    return(
        <div onMouseMove={handleMouseMove}>
            <div style={{height:'1000px'}}>
                <p className="fs-2">Move mouse pointer to test</p>
            </div>
            <img src="flag.gif" style={styleObj} width="50" height="50" />
        </div>
    )
}