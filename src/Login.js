import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import facebook from './footer/facebook.svg';
import Twitter from './footer/twitter.svg';
import Instagram from './footer/instagram.svg';
import Linkedin from './footer/linkedin.svg';
import './Login.css';
export default function Login() {
    const [userId, setUserID] = useState("");
    const [pwd, setPwd] = useState("");

    function handleSubmit(event) {
        let strData = `userID :${userId} and password : ${pwd}`;
        alert(`Welcome ${userId}`);

        event.preventDefault();
    }

    return (
            <div className='lformContainer'>
                <div className='insideForm'>
                    <form autocomplete='off' class='form' onSubmit={handleSubmit}>
                        <div class='control'>
                            <h1 className='lh1'>
                                Sign In
                            </h1>
                        </div>
                        <div class='control block-cube block-input'>
                            <input name='username' placeholder='Username' type='text' id="UID" value={userId} onChange={(e)=>setUserID(e.target.value)}/>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                        </div>
                        <div class='control block-cube block-input'>
                            <input name='password' placeholder='Password' type='password' id="PWD" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                        </div>
                        <button class='btn block-cube block-cube-hover' type='button' onClick={Login}>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='text'>
                                Log In
                            </div>
                        </button><br/>
                        <NavLink to="/Register"><button class='btn block-cube block-cube-hover' type='button'>
                            <div class='bg-top'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg-right'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='bg'>
                                <div class='bg-inner'></div>
                            </div>
                            <div class='text'>
                                Register
                            </div>
                        </button></NavLink>
                    </form>
                    <div className="lfooter" ><br />
                        <button className='lfooterButton'><img src={facebook} className="lfooterImage" alt="facebook"></img></button>
                        <button className='lfooterButton'><img src={Instagram} className="lfooterImage" alt="facebook"></img></button>
                        <button className='lfooterButton'><img src={Linkedin} className="lfooterImage" alt="facebook"></img></button>
                        <button className='lfooterButton'><img src={Twitter} className="lfooterImage" alt="facebook"></img></button><br /><br />
                        <p className='lfooterNotes'>Chinta Rohan, Trainee Analyst<br />
                            Wissen Technology</p>
                    </div>
                </div>
            </div>

    );
}