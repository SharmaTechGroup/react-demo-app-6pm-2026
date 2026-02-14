import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { ToDoHome } from "./todo-home";
import { ToDoLogin } from "./todo-login";
import { ToDoRegister } from "./todo-register";
import { ToDoAdd } from "./todo-add";
import { ToDoDelete } from "./todo-delete";
import { ToDoEdit } from "./todo-edit";
import { ToDoDetails } from "./todo-details";
const ToDoDashboard = lazy(()=> import('./todo-dashboard'));


export function ToDoIndex(){
    return(
        <div className="container-fluid">
           <BrowserRouter>
             <header className="p-3 m-1 bg-light d-flex justify-content-between">
                <div>
                    <span className="bi fs-4 mx-2 bi-pencil-square"></span>
                    <span className="fs-4 fw-bold"> <Link to="/" className="text-secondary text-decoration-none">Task Manager</Link> </span>
                </div>
                <div>
                    <button className="btn me-2">Features</button>
                    <button className="btn">Pricing</button>
                    <button className="btn mx-2">About</button>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </header>
            <section className="mt-2">
                <Suspense fallback={<div>Loading component please wait..</div>}>
                      <Routes>
                        <Route path="/"  element={<ToDoHome />} />
                        <Route path="login" element={<ToDoLogin width='w-25' />} />
                        <Route path="register" element={<ToDoRegister width='w-25' />} />
                        <Route path="dashboard" element={<ToDoDashboard />} >
                            <Route path="" element={<ToDoDetails />} />
                            <Route path="details"  element={<ToDoDetails />} />
                            <Route path="add" element={<ToDoAdd />} />
                            <Route path="edit/:id" element={<ToDoEdit />} />
                            <Route path="delete/:id" element={<ToDoDelete />} />
                        </Route>
                      </Routes>
                </Suspense>
            </section>
           </BrowserRouter>
        </div>
    )
}