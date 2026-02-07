import { createContext, useContext, useState } from "react"


let UserContext = createContext(null);

export function Level1(){

    let context = useContext(UserContext);

    return(
        <div className="bg-dark text-white p-4">
            <h4>Level-1 - Hello ! {context} </h4>
            <Level2  />
        </div>
    )
}

export function Level2(){
    let context = useContext(UserContext);

    return(
        <div className="bg-warning text-white p-4">
            <h4>Level-2 - Hi ! {context}</h4>
        </div>
    )
}


export function ContextDemo(){

    const [uname, setUName] = useState('');

    function handleNameChange(e){
        setUName(e.target.value);
    }

    return(
        <div className="container-fluid p-4 bg-danger text-white">
            <h3>Parent Component <input onChange={handleNameChange} type="text" placeholder="User name" /> </h3>
            <UserContext value={uname}>
                <Level1 />
            </UserContext>
            
        </div>
    )
}