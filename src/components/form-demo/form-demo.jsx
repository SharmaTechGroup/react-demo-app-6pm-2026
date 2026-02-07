import { useFormik } from "formik";
import * as yup from "yup";

export function FormDemo(){

   

    const formik = useFormik({
         initialValues: {
            UserName: '',
            Age: 0,
            Mobile: '',
            City: '',
            Gender: ''
         },
         validationSchema: yup.object({
             UserName: yup.string().required('User Name Required').min(4, 'Name too short'),
             Age: yup.number().required('Age Required').min(15, 'Age min 15').max(30, 'Age Max 30'),
             Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/, 'Invalid Mobile +91 10 digits')
         }) ,
         onSubmit : (user) => {
            console.log(user);
         }
    })
    
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" {...formik.getFieldProps('UserName')} name="UserName"  /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age" /></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile" /></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                     <dt>Your City</dt>
                    <dd>
                        <select onChange={formik.handleChange} name="City" >
                            <option value='-1'>Select City</option>
                            <option value='Delhi'>Delhi</option>
                            <option value='Hyd'>Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                    <dt>Choose Gender</dt>
                    <dd>
                        <input type="radio" name="Gender" value="Male" onChange={formik.handleChange} /> Male
                        <input type="radio" name="Gender" value="Female" onChange={formik.handleChange} /> Female
                    </dd>
                </dl>
                <button type="submit" disabled={(formik.isValid)?false:true} className="mx-2">Register</button>
                <button  className={(formik.dirty)?'d-inline':'d-none'}>Save</button>
                <div style={{color:'red'}} className={(formik.isValid)?'d-none':'d-block'}>
                    <h3>Please check the following errors in form</h3>
                    <ul>
                      {
                         Object.values(formik.errors).map(error=> <li key={error}> {error} </li>)
                      }
                    </ul>
                </div>
            </form>
        </div>
    )
}