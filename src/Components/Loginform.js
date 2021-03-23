import React, {useState} from 'react'
import './Login.css'

function Loginform(){

const [email, setEmail] = useState('');
const [Password, setPassword] = useState('');


function handleEmail(v){
    setEmail(v.target.value)
    
}

function handlePassword(e){
    setPassword(e.target.value)
}


function handleSubmit(s){
    s.preventDefault();

    if(Password === '12345'){
        const token = 'Mustafaessam'
        localStorage.setItem('email', email)
        localStorage.setItem('token', token)

    }else{
       document.getElementById('lert').style.display = 'block'
    }


}

    return(
        <div className="contain">
                    
            <div className="formdiv">
                <h1>Sign In</h1>

                <div id="lert" class="alert alert-danger" role="alert">
                Wrong Information
                </div>

                <form onSubmit={handleSubmit}>
                <input type="email" className="form-control" valid placeholder="Email" value={email} onChange={handleEmail}/>
                <br/>
                <input type="password" className="form-control" placeholder="Password" value={Password} onChange={handlePassword}/>
                <br/>
                <button className="btn btn-primary" type="submit">Login</button>
                <a href="#">Forget your password?</a>
                </form>
             </div>
        </div>
    )
}

export default Loginform;