import { Formik, Form, Field, ErrorMessage, useFormik } from "formik"
import * as yup from "yup";

export function FormikDemo(){


    

    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <Formik initialValues={{UserName:'', Mobile:''}} validationSchema={yup.object({UserName:yup.string().required('User Name Required').min(4,'Name too Short'), Mobile: yup.string().required('Mobile Required').matches(/\+91\d{10}/)})} onSubmit={(user)=>console.log(user)}>
                {
                    formik =>
                    <Form>
                    <dl>
                        <dt>User Name</dt>
                        <dd><Field type="text" name="UserName" /></dd>
                        <dd className="text-danger"><ErrorMessage name="UserName" /></dd>
                        <dt>Mobile</dt>
                        <dd><Field type="text" name="Mobile" /></dd>
                        <dd className="text-danger"><ErrorMessage name="Mobile" /></dd>
                    </dl>
                    <button disabled={(formik.isValid)?false:true} type="submit">Register</button>
                   </Form>
                }
            </Formik>
        </div>
    )
}