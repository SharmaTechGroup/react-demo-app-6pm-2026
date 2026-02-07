import { useEffect, useState } from "react"
import moment from "moment";

export function DataBinding(){

    const [regEx] = useState(/(?=.*[A-Z])\w{4,15}/);
    const [password] = useState('daVid123');
   
    useEffect(()=>{

    },[])


    return(
        <div className="container-fluid p-4">
            <p>Your Password : {password}</p>
            {
                (password.match(regEx)) ? "Strong Password": "Weak Password one uppercase letter required"
            }
        </div>
    )
}