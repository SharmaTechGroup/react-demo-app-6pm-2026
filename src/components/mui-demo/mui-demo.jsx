import { TextField, Button } from "@mui/material";
import { useFormik } from "formik";


export function MuiDemo(){


    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password:''
        },
        onSubmit : (userdata)=> {
            console.log(userdata);
        }
    })

    return(
        <div className="container-fluid">
            <div className="mt-2 row">
                <div className="col">
                    <h3>Bootstrap Login</h3>
                    <form className="w-50">
                        <div className="mb-2">
                            <label className="form-label">User Name</label>
                            <div>
                                <input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="mb-2">
                            <label className="form-label">Password</label>
                            <div>
                                <input type="password" className="form-control" />
                            </div>
                        </div>
                        <div>
                            <button className="btn btn-primary w-100">Login</button>
                        </div>
                    </form>
                </div>
                <div className="col">
                    <h3>MUI Login</h3>
                    <form className="w-50" onSubmit={formik.handleSubmit}>
                        <div className="mb-2">
                             <TextField onChange={formik.handleChange} name="UserName" className="w-100" type="text" label="User Name" variant="standard" />
                        </div>
                        <div className="mb-2">
                             <TextField onChange={formik.handleChange} name="Password" className="w-100" type="password" label="Password" variant="standard" />
                        </div>
                        <div>
                            <Button type="submit" className="w-100" variant="contained" color="primary"> Login </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}