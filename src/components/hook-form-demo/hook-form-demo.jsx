import { useForm } from "react-hook-form"

export function HookFormDemo(){

    const {register, handleSubmit, formState:{errors}} = useForm();

    const submit = (user)=> {
        console.log(user);
    }

    return(
        <div className="container-fluid">
            <form onSubmit={handleSubmit(submit)}>
                <h3>Register User</h3>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...register("UserName", {required:true, minLength:4})} name="UserName" /></dd>
                    <dd className="text-danger">
                        {
                            (errors.UserName?.type==="required")? <span>User Name Required</span> : <span></span>
                            &&
                            (errors.UserName?.type==="minLength")? <span>Name too short</span> : <span></span>
                        }
                    </dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type="text" {...register("Mobile", {required:true, pattern:/\+91\d{10}/})} name="Mobile" />
                    </dd>
                    <dd className="text-danger">
                      {
                        (errors.Mobile?.type==="required")? <span>Mobile Required</span>: <span></span>
                        && 
                        (errors.Mobile?.type==="pattern")? <span>Invalid Mobile +91 10 digits</span> : <span></span>
                      }
                    </dd>
                    <dt>Upload Photo</dt>
                    <dd>
                        <input type="file" /> <button className="btn d-inline btn-link"> upload more</button> <button className="btn bi bi-trash d-inline"></button>
                    </dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}