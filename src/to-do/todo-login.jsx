import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export function ToDoLogin(props){

    const [users, setUsers] = useState([{user_id:null, user_name:null, password:null, email:null}]);
    let navigate = useNavigate();

    const [cookies, setCookie, removeCookie] = useCookies(['userid','username']);

    function LoadUsers(){
        axios('http://localhost:3000/users')
        .then(response=>{
            setUsers(response.data);
        })
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    const formik = useFormik({
        initialValues : {
            user_id : '',
            user_name: '',
            password: '',
            email:''
        },
        onSubmit: (user)=>{
             var userDetails = users.find(item=> item.user_id===user.user_id);
             if(userDetails)
             {
                if(userDetails.password===user.password){
                    setCookie('userid', userDetails.user_id);
                    setCookie('username', userDetails.user_name);
                    navigate('/dashboard');
                } else {
                    alert('Invalid Password');
                }
             } else{
                alert('Invalid User Id');
             }
        }
    })

    return(
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit} className={`p-4 ${props.width}`}>
                <h4 className="bi bi-person-fill"> User Login</h4>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="user_id" className="form-control" /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" onChange={formik.handleChange} name="password" className="form-control" /></dd>
                  
                </dl>
                <button type="submit" className="btn btn-primary w-100">Login</button>
                <div className="mt-4">
                    <Link to="/register">New User Register</Link>
                </div>
            </form>
        </div>
    )
}