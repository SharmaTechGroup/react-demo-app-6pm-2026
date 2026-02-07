import { useState } from "react"

export function ElementState()
{
    const [userName, setUserName] = useState('');
    const [msg, setMsg] = useState('');

    function handleNameBlur(){
        setUserName(userName.toUpperCase());
        setMsg('');
    }
    function handleNameChange(e){
        setUserName(e.target.value);
    }

    function handleNameFocus(){
        setMsg('Name in Block Letters');
    }

    return(
        <div className="container-fluid">
            <h2>Register</h2>
            <dl className="ms-4">
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onFocus={handleNameFocus} onChange={handleNameChange} onBlur={handleNameBlur} placeholder="Name in Block Letters" /></dd>
                <dd className="text-warning fs-6">{msg}</dd>
            </dl>
        </div>
    )
}