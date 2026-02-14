import { useEffect, useState } from "react"


export function Login(props){

    useEffect(()=>{
         console.log('Login Mounted normal');
         return()=>{
            console.log('Login Unmounted normal');
         }
    },[])
    useEffect(()=>{
         console.log(`Login Mounted with props ${props.id}`);
         return()=>{
            console.log('Login Unmounted propss');
         }
    },[props.id])
    return(
        <div>
            <h3>Login</h3>
        </div>
    )
}
export function Register(){

     useEffect(()=>{
         console.log('Register Mounted');
         return()=>{
            console.log('Register Unmounted');
         }
    },[])
    return(
        <div>
            <h3>Register</h3>
        </div>
    )
}

export function EffectDemo(){

    const [view, setView] = useState('');

    function handleLoginClick(){
        setView(<Login id="2" />);
    }

    function handleRegisterClick(){
        setView(<Register />);
    }

     return(
        <div className="container-fluid">
            <div className="p-5">
                <button onClick={handleLoginClick}>Login</button>
                <button onClick={handleRegisterClick}>Register</button>
                <hr />
                {view}
            </div>
        </div>
     )
}