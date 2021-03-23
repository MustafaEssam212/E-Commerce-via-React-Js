import React, {useState} from 'react'
import {Link} from "react-router-dom";
import './SignUp.css'

function SignUp(){
    const [Username, setUsername] = useState('');
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [ConfirmPass, setConfirmPass] = useState('');
    function regSubmit(e){
        e.preventDefault()
        if(Password && Email && Username  == ''){
            document.getElementById('lert').style.display = 'block'
            document.getElementById('lert').innerHTML = 'Wrong Information'
            document.getElementById('succ').style.display = 'none'
        }
    
        else if(ConfirmPass !== Password){
            document.getElementById('lert').style.display = 'block'
            document.getElementById('lert').innerHTML = 'Password does not match'
            document.getElementById('succ').style.display = 'none'
        }
        else if(Password == ''){
            document.getElementById('lert').style.display = 'block'
            document.getElementById('lert').innerHTML = 'Wrong Information'
            document.getElementById('succ').style.display = 'none'
        }
        else if(Username == ''){
            document.getElementById('lert').style.display = 'block'
            document.getElementById('lert').innerHTML = 'Wrong Information'
            document.getElementById('succ').style.display = 'none'
        }
        else if(Email == ''){
            document.getElementById('lert').style.display = 'block'
            document.getElementById('lert').innerHTML = 'Wrong Information'
            document.getElementById('succ').style.display = 'none'
        }
        else{
            document.getElementById('succ').style.display = 'block'
            document.getElementById('lert').style.display = 'none'
        }
    }

    function regUsername(f){
        setUsername(f.target.value)
    }

    function regEmail(s){
        setEmail(s.target.value)
    }

    function regPassword(z){
        setPassword(z.target.value)
    }

    function confirmPass(a){
        setConfirmPass(a.target.value)
        if(a.target.value == Password){
            document.getElementById('mess').style.display = 'none'
        }else{
            document.getElementById('mess').style.display = 'block'
        }
    }

    return(
        <div className="signp">
                    
            <div className="signdiv">
                <h1>Sign Up</h1>
                <h2>It's free and only take a minute</h2>

                <div id="lert" class="alert alert-danger " role="alert">
                </div>
                <div id="succ" class="alert alert-success" role="alert">
                You have been registered
                </div>

                <form className="signupform" onSubmit={regSubmit}>
                <input className="form-control" placeholder="Username" value={Username} onChange={regUsername}/>
                <input type="email" className="form-control" valid placeholder="Email" value={Email} onChange={regEmail}/>
                <input type="password" className="form-control" placeholder="Password" value={Password} onChange={regPassword}/>
                <input type="password" className="form-control" placeholder="Confirm Password" onChange={confirmPass}/>
                <p id="mess">password does not match</p>
                <br/>
                <button className="btn btn-primary" type="submit">Register</button>
                <br></br>
                <Link to="/SignIn">Have an account? Login here</Link>
                </form>
             </div>
        </div>
    )
}

export default SignUp;