import { useRef } from "react";

export function NewFormDemo(){


    const nameRef = useRef(null);
    const mobileRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        console.log(`User Name : ${nameRef.current.value}\nMobile : ${mobileRef.current.value}`);
    }

    return(
        <div className="container-fluid p-3">
            <form onSubmit={handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" ref={nameRef} name="UserName" /></dd>
                     <dt>Mobile</dt>
                    <dd><input type="text" ref={mobileRef} name="Mobile" /></dd>
                </dl>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}