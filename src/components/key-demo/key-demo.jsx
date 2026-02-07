import axios from "axios";
import { useEffect, useState } from "react"

export function KeyDemo(){

    const [users, setUsers] = useState([{username:null}]);
    const [userMsg, setUserMsg] = useState('');
    const [userClass, setUserClass] = useState('');
    const [progressWidth, setProgressWidth] = useState({width:null});
    const [strengthColor, setStrengthColor] = useState('');
    const [passwordMsg, setPasswordMsg] = useState('');
 
    function LoadUsers(){
        axios.get('users.json')
        .then(response=>{
            setUsers(response.data);
        })
    }

    useEffect(()=>{
        LoadUsers();
    },[])

    function verifyUser(e){
        for(var user of users)
        {
            if(user.username===e.target.value){
                setUserMsg('User Name Taken - Try Another');
                setUserClass('text-danger');
                break;
            } else {
                setUserMsg('User Name Available');
                setUserClass('text-success');
            }
        }
    }

    function VerifyPassword(e){
        if(e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
                // strong
                setProgressWidth({width:'100%'})
                setStrengthColor('bg-success');
                setPasswordMsg('Strong Password');
        } else {
            if(e.target.value.length<4){
                // poor 
                setProgressWidth({width:'30%'})
                setStrengthColor('bg-danger');
                setPasswordMsg('Poor Password');
            } else {
                // weak
                setProgressWidth({width:'70%'});
                setStrengthColor('bg-warning');
                setPasswordMsg('Weak Password');
            }
        }
    }

    return(
        <div className="container-fluid p-4">
            <h3>Register User</h3>
            <dl className="w-25">
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" onKeyUp={verifyUser} /></dd>
                <dd className={userClass}>{userMsg}</dd>
                <dt>Password</dt>
                <dd>
                    <input onKeyUp={VerifyPassword} className="form-control" type="password" />
                </dd>
                <dd>
                    <div className="progress">
                      <div className={`progress-bar text-white progress-bar-striped progress-bar-animated ${strengthColor}`} style={progressWidth}>
                            {passwordMsg}
                      </div>
                    </div>
                </dd>
            </dl>        
        </div>
    )
}