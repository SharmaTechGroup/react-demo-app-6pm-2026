import { useCallback, useEffect, useState } from "react";
import { useCookies } from "react-cookie"
import { Link, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";

export default function ToDoDashboard(){

    const [cookies, setCookie, removeCookie] = useCookies(['userid','username']);
    
    const [searchString, setSearchString] = useState('');
  
    let navigate = useNavigate();

    

    useEffect(()=>{
        if(cookies['userid']===undefined){
             navigate('/login');
        }
    },[cookies])

    const handleSignout = useCallback(()=>{
        removeCookie('userid');
        removeCookie('username');
        navigate('/');
    },[cookies])

    return(
        <div className="container-fluid mt-5">
           <div className="row">
                <div className="col-2">
                    <div className="fw-bold fs-6">  {cookies['username']} - Dashboard  </div>
                    <nav className="mt-3">
                        <div className="bi bi-pencil-square"> <Link to="">My Tasks</Link> </div>
                        <div className="bi my-4 bi-calendar-date"> Calendar</div>
                        <div className="bi bi-folder"> Categories </div>
                    </nav>
                </div>
                <div className="col-10">
                    <div role="header" className="d-flex justify-content-between">
                        <div className="w-50">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={(e)=>{setSearchString(e.target.value);}} placeholder="Search appointments, categories" /> 
                                <button className="btn btn-secondary bi bi-search"></button>
                            </div>
                        </div>
                        <div className="mt-3">
                            <Link to="add" className="btn mx-2 btn-primary bi bi-plus"> Add New</Link>
                            <button onClick={handleSignout} className="bi btn btn-warning bi-person-circle"> Signout</button>
                        </div>
                    </div>
                    <div>
                        <Outlet context={{searchString}} />
                    </div>
                </div>
           </div>
        </div>
    )
}