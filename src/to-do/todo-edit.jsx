import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useParams } from "react-router-dom";


export function ToDoEdit(){

    const [cookies, setCookie, removeCookie] = useCookies(['userid','username']);

    const [appointment, setAppointment] = useState({id:null, user_id:null, title:null, description:null, date: Date()});
    let navigate = useNavigate();
    let params = useParams();

    function LoadAppointment(){
        axios.get(`http://localhost:3000/appointments/${params.id}`)
        .then(response=>{
             console.log(response.data);
             setAppointment(response.data);
        })
    }   

    useEffect(()=>{

        LoadAppointment();

    },[])

    const formik = useFormik({
        initialValues: {
             title: appointment.title,
             description: appointment.description,
             date: appointment.date,
             user_id: appointment.user_id
        },
        onSubmit: (appointment) => {   
            axios.put(`http://localhost:3000/appointments/${params.id}`, appointment)
            .then(()=>{console.log('saved..')});
            alert('Appointment Updated..');
            navigate('/dashboard');
        },
        enableReinitialize: true
    })

    return(
        <div className="container-fluid">
            <h4>Edit Appointment</h4>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Title</dt>
                    <dd><input type="text" name="title" value={formik.values.title} onChange={formik.handleChange} /></dd>
                    <dd>Description</dd>
                    <dd><textarea rows={4} name="description" value={formik.values.description} onChange={formik.handleChange} cols={40}></textarea></dd>
                    <dt>Date</dt>
                    <dd><input type="date" name="date" value={formik.values.date} onChange={formik.handleChange} /></dd>
                </dl>
                <button type="submit" className="btn btn-success">Save</button>
                <Link to="/dashboard" className="btn btn-danger mx-2"> Cancel </Link>
            </form>
        </div>
    )
}