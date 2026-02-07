import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import { Cookies, useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

export function ToDoAdd(){


    const [cookies, setCookie, removeCookie] = useCookies(['userid', 'username']);
    let navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
             title: "",
             description: "",
             date: new Date(),
             user_id: cookies['userid']
        },
        onSubmit : (appointment)=>{
            axios.post(`http://localhost:3000/appointments`,appointment)
            .then(()=>{console.log('appointment added')});
            alert('Appointment added successfully..');
            navigate('/dashboard');
        }
    })

    return(
        <div className="container-fluid">
            <div className="fw-bold fs-5">Add Appointment</div>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" name="title"  onChange={formik.handleChange} /></dd>
                    <dt>Description</dt>
                    <dd><textarea rows={4} name="description" onChange={formik.handleChange} cols={40}></textarea></dd>
                    <dt>Date</dt>
                    <dd><input type="date" name="date" onChange={formik.handleChange} /></dd>
                </dl>
                <button className="btn btn-primary" type="submit">Add</button>
                <Link to="/dashboard" className="btn btn-danger mx-2">Cancel</Link>
            </form>
        </div>
    )
}