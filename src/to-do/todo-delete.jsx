import axios from "axios";
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";


export function ToDoDelete(){


    let params = useParams();
    let navigate = useNavigate();

    const [appointment, setAppointment] = useState({id:null, user_id:null, title:null, description:null, date: Date()});

    useEffect(()=>{
         axios.get(`http://localhost:3000/appointments/${params.id}`)
         .then(response=>{
              setAppointment(response.data);
         })
    },[])

    function handleDeleteClick(){
        var confirm = window.confirm('Are you sure?\nWant to Delete?');
        if(confirm===true){
            axios.delete(`http://localhost:3000/appointments/${params.id}`)
            .then(()=>{console.log('deleted')});
            navigate('/dashboard');
        }
    }

    return(
        <div className="container-fluid">
            <div className="fw-bold fs-5">Delete Appointment</div>
            <dl>
                <dt>Title</dt>
                <dd>{appointment.title}</dd>
                <dt>Description</dt>
                <dd>{appointment.description}</dd>
                <dt>Date</dt>
                <dd>{appointment.date}</dd>
            </dl>
            <button onClick={handleDeleteClick} className="btn btn-warning">Delete</button>
            <Link to="/dashboard" className="btn btn-danger mx-2">Cancel</Link>
        </div>
    )
}