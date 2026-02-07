import { useState } from "react"

export function EventBinding(){

    const [userName, setUserName] = useState('John');

    function handleNameChange(e){
        setUserName(e.target.value);
    }

    return(
        <div className="container-fluid p-4">
             <dl>
                <dt>User Name</dt>
                <dd><input type="text" onChange={handleNameChange} value={userName} /></dd>
             </dl>
             <h2>Hello ! {userName}</h2>
        </div>
    )
}