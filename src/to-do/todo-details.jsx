import { useCallback, useEffect, useLayoutEffect, useMemo, useState, useInsertionEffect } from "react";
import { useCookies } from "react-cookie"
import { Link, Outlet, useNavigate, useOutletContext } from "react-router-dom";
import axios from "axios";

export function ToDoDetails(){

    const [appointments, setAppointments] = useState([{id:null, user_id:null, title:null, description:null, date: Date()}]);
    const [cookies, setCookie, removeCookie] = useCookies(['userid','username']);
    let {searchString} = useOutletContext();

    const userAppointments = useMemo(()=>{

              return appointments.filter(appointment=> appointment.user_id===cookies['userid']);
          

    },[appointments, cookies])

    const FilteredAppointments = useMemo(()=>{
          if(searchString=="")
          {
             return  userAppointments;
          } else {
             return  userAppointments.filter(task=> task.title.toLowerCase().includes(searchString.toLowerCase()));
          }
    },[appointments, cookies])

    const LoadAppointments = useCallback(()=>{
         axios.get('http://localhost:3000/appointments').then(response=>{
                  setAppointments(response.data);
            })
    },[])

     useEffect(()=>{
         LoadAppointments();
     },[searchString])

     useLayoutEffect(()=>{

           
     },[])

    return(
        <div className="container-fluid">
             <div role="filter" className="mt-4 bg-light p-2">
                        <div className="d-flex justify-content-baseline align-items-center">
                            <button className="btn bi bi-funnel"> Filter</button>
                            <button className="btn bi bi-sort-alpha-down"></button>
                            <select className="form-select w-25">
                                <option>Select Date</option>
                            </select>
                        </div>
                    </div>
                    <div className="mt-2">
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    FilteredAppointments.map(appointment=>
                                        <tr key={appointment.id}>
                                            <td>{appointment.title}</td>
                                            <td>{appointment.description}</td>
                                            <td>{appointment.date}</td>
                                            <td>
                                                <Link to={`edit/${appointment.id}`} className="btn btn-warning bi bi-pen"></Link>
                                                <Link to={`delete/${appointment.id}`} className="btn btn-danger bi bi-trash mx-2"></Link>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

        </div>
    )
}