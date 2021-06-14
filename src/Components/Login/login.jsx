import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import './login.css';

export default function Login() {
    let history = useHistory();

    const [accounts,setAccount] = useState({
        username:"",
        password:""
    })
    const [errors,setError] = useState({});

    function handleChange(e){
        const account = {...accounts};
        account[e.currentTarget.name] = e.currentTarget.value;
        setAccount(account);
    }
    function validate (){
        const errors = {};
        if(accounts.username===""){
            console.log("into errors");
            errors.username = "username is requires"     
        }
        if(accounts.password===""){
            errors.password= "password is required"
        }
        return errors;
    }

    function handleSubmit(e){
        console.log("submitted");
        e.preventDefault();
       const errors  = validate();  
        if(JSON.stringify(errors) !== '{}'){
            setError(errors)
        }else{
            history.push('/dashbored');
        }
    }
    return (
           <div className="wrapper">
            <form onSubmit={handleSubmit} className="form-signin">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" 
            className="form-control"
            autoFocus
             id="exampleInputEmail1" aria-describedby="emailHelp" 
             placeholder="username"
             value={accounts.username}
             onChange={handleChange} 
             name="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" 
            className="form-control"
             id="exampleInputPassword1"
              placeholder="Password"
              name="password"
              value={accounts.password}
              onChange={handleChange} />
          </div>
          <p className="button-container">
          <button type="submit" className="btn btn-warning" >Submit</button>

          </p>
          
        </form>
            <div>
            {Object.keys(errors).length ? <div class="alert alert-warning" role="alert">
                   {errors.username} <br/>
                   {errors.password}
    </div>:""}
            </div>
           
            </div>);

}
