import { useState } from "react";
import { ChildComponent } from "./child-component";

export function ParentComponent(){

    const [msg, setMsg] = useState('waiting for data from child');

    function handleChildComponentClick(e){
        setMsg(e);
    }

    return(
        <div className="container-fluid text-white bg-danger p-4">
            <h2>Parent Component - {msg}</h2>
            <ChildComponent onChildClick={handleChildComponentClick} />
        </div>
    )
}