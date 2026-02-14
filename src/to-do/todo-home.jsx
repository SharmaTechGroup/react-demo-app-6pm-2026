import { useEffect } from "react";
import { ToDoLogin } from "./todo-login";
import { ToDoRegister } from "./todo-register";


export function ToDoHome(){

    
    useEffect(()=>{
        
    },[])

    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <div className="text-center mt-5 fs-1">
                        <span className="fw-bold text-primary">Master Your Day,</span>
                         <br />
                        <span className="fs-3">One Task at a Time</span>
                        <div>
                            <img src="to-do.jpg" height="300" width="100%"></img>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="mt-5 ms-5">
                        <ul className="nav nav-tabs">
                            <li className="nav-item"> <a href="#login" data-bs-toggle="tab" className="nav-link active">User Login</a> </li>
                            <li className="nav-item"> <a href="#register" data-bs-toggle="tab" className="nav-link">Register</a> </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active" id="login">
                                 <ToDoLogin width="w-50" />
                
                            </div>
                            <div className="tab-pane" id="register">
                                <ToDoRegister width="w-50" />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}