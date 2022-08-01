import React from "react";
import './App.css'
import { useState } from "react";

export default function RegistrationForm()
{
    const [userName ,setUsername] = useState("");
    const [mail,setMail]=useState("");
    const [pwd ,setPwd] = useState("");
    const [firstName ,setFirstname] = useState("");
    const [lastName ,setLastname] = useState("");
    const [number ,setnumber] = useState("");
    const [dob ,setdob] = useState("");
    var show=false;
    function showPage()
    {
        if(show === false)
        {
            document.getElementById('registration').style.display="none"
            document.getElementById('details').style.display="block";
            show=true;
        }

        else
        {
            document.getElementById('registration').style.display="block";
            document.getElementById('details').style.display="none";
            show=false;   
        }
        

    }
    return(
        <div className="mainContainer">
            
            <div className="registrationContainer" id="registration">
            <h2>Sign-up</h2><br/>
                <form>
                    <input type="text" placeholder="Username" value={userName} onChange={(e)=>setUsername(e.target.value)}/><br/><br/>
                    <input type="text" placeholder="Email" value={mail} onChange={(e)=>setMail(e.target.value)}/><br/><br/>
                    <input type="password" placeholder="Password" value={pwd} onChange={(e)=>setPwd(e.target.value)}/><br/><br/>
                    <input type="text" placeholder="firstName" value={firstName} onChange={(e)=>setFirstname(e.target.value)}/><br/><br/>
                    <input type="text" placeholder="lastName" value={lastName} onChange={(e)=>setLastname(e.target.value)}/><br/><br/>
                    <input type="text" placeholder="number" value={number} onChange={(e)=>setnumber(e.target.value)}/><br/><br/>
                    <input type="date" placeholder="dob" value={dob} onChange={(e)=>setdob(e.target.value)}/><br/><br/>
                    <input type="button" value="Register" onClick={showPage}/>
                </form>
            </div>

            <div className="detailsContainer" id="details">
                Name : {firstName} {lastName} <br/>
                Username : {userName}<br/>
                Email : {mail}<br/>
                DOB : {dob}<br/>
                Mobile : {number}<br/>
                <button onClick={showPage}>Back</button>
            </div>
        </div>
    );
}