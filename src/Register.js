import React from "react";
import './App.css'
import { useState } from "react";
import { NavLink } from 'react-router-dom';
import facebook from './footer/facebook.svg';
import Twitter from './footer/twitter.svg';
import Instagram from './footer/instagram.svg';
import Linkedin from './footer/linkedin.svg';

export default function RegistrationForm() {
    const [userName, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [pwd, setPwd] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [number, setnumber] = useState("");
    const [dob, setdob] = useState("");
    function showPage() {
        alert(`Username ${userName} Password ${pwd} are added`);
    }
    return (
        <div>
            <div className="registerContainer">

                <div className="insideregisterContainer" id="registration">
                    <h1 align="center">Sign-up</h1><br />
                    <form>
                        <input type="text" placeholder="Username" value={userName} onChange={(e) => setUsername(e.target.value)} /><br /><br />
                        <input type="text" placeholder="Email" value={mail} onChange={(e) => setMail(e.target.value)} /><br /><br />
                        <input type="password" placeholder="Password" value={pwd} onChange={(e) => setPwd(e.target.value)} /><br /><br />
                        <input type="text" placeholder="firstName" value={firstName} onChange={(e) => setFirstname(e.target.value)} /><br /><br />
                        <input type="text" placeholder="lastName" value={lastName} onChange={(e) => setLastname(e.target.value)} /><br /><br />
                        <input type="text" placeholder="number" value={number} onChange={(e) => setnumber(e.target.value)} /><br /><br />
                        <input type="date" placeholder="dob" value={dob} onChange={(e) => setdob(e.target.value)} /><br /><br />
                        <input type="button" value="Register" className="button-29" align="center" onClick={showPage} /><br /><br />
                        <NavLink to="/login"><button className='button-29'>Login</button></NavLink>
                    </form>
                </div>
               
            </div>
            <div class="footer" ><br/>
                <button className='footerButton'><img src={facebook} className="footerImage"></img></button>
                <button className='footerButton'><img src={Instagram} className="footerImage"></img></button>
                <button className='footerButton'><img src={Linkedin} className="footerImage"></img></button>
                <button className='footerButton'><img src={Twitter} className="footerImage"></img></button><br/><br/>
                <p className='footerNotes'>Chinta Rohan, Trainee Analyst<br/>
                Wissen Technology</p>
            </div> 
        </div>

    );
}