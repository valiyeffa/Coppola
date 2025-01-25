import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Cookies from 'universal-cookie';
import { environment } from '../../environments/environment';

const AccLogReg = () => {
    const cookies = new Cookies(null, { path: '/' });

    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [eye, setEye] = useState(true);
    const [inputType, setInputType] = useState("password");
    const emailRef = useRef();
    const passwordRef = useRef();

    const regNameRef = useRef();
    const regSnameRef = useRef();
    const regEmailRef = useRef();
    const regPassRef = useRef();


    const loginSubmit = async (e) => {
        e.preventDefault();

        if (!emailRef.current.value || !passwordRef.current.value) {
            Swal.fire({
                title: 'Please fill inputs!',
                icon: "warning"
            })
        } else {
            try {
                const response = await axios.post(`${environment.accUrl}/login`, {
                    email: emailRef.current.value,
                    password: passwordRef.current.value
                })

                console.log(response.data);
                if (response.status === 201 || response.status === 200) {
                    cookies.set("x-auth-token", response.data.token, { path: '/' });
                    cookies.set("role", response.data.user.role, { path: '/' });
                    cookies.set("user-id", response.data.user._id, { path: '/' });
                    cookies.set('user', true);

                    Swal.fire({
                        title: `Welcome! ${response.data.message}`,
                        icon: "success",
                        preConfirm: () => { navigate('/') }
                    })
                }
            } catch (err) {
                if (err.status === 400) {
                    Swal.fire({
                        title: 'Email or Password is incorrect!',
                        icon: "error",
                    })
                } else if (err.status === 404) {
                    Swal.fire({
                        title: 'User not found!',
                        icon: "error",
                    })
                }
            }
        }
    }

    const registerSubmit = async (e) => {
        e.preventDefault();
        if (!regNameRef.current.value || !regEmailRef.current.value || !regPassRef.current.value || !regSnameRef.current.value) {
            Swal.fire({
                title: 'Please fill inputs!',
                icon: "warning"
            })
        } else {
            try {
                const regsData = await axios.post(`${environment.accUrl}/register`, {
                    name: regNameRef.current.value,
                    surname: regSnameRef.current.value,
                    email: regEmailRef.current.value,
                    password: regPassRef.current.value
                })
                if (regsData.status === 201 || regsData.status === 200) {
                    Swal.fire({
                        title: `Welcome! You can login your account now!`,
                        icon: "success",
                        preConfirm: () => { window.location.reload() }
                    })
                }
                console.log(regsData.data.token);

            } catch (err) {
                console.log(err.response.data);

                if (err.response.status === 400 || err.response.status === 401) {
                    let alertText = "";
                    if (err.response.data.errors && err.response.data.errors.length > 0) {
                        alertText = err.response.data.errors.map(error => {
                            if (error.message.toLowerCase().includes("invalid")) {
                                return "The first letter of the password should be uppercase and must contain at least one number!";
                            } else {
                                return error.message;
                            }
                        }).join('\n');
                    }
                    Swal.fire({
                        title: "Error",
                        text: alertText,
                        icon: "error"
                    })
                }
            }
        }
    }

    const passToggleShow = () => {
        if (eye === true) {
            setEye(false);
            setInputType("text");
        } else {
            setEye(true);
            setInputType("password");
        }
    }

    return (
        <div className='account-info'>
            <div className={active ? "active form" : "form"}>
                <div className="form-container sign-up">
                    <form onSubmit={registerSubmit}>
                        <h1 className='my-4'>Create Account</h1>
                        <input ref={regNameRef} type="text" placeholder="Name" />
                        <input ref={regSnameRef} type="text" placeholder="Surname" />
                        <input ref={regEmailRef} type="email" placeholder="Email" />
                        <div className="pass-box">
                            <input ref={regPassRef} type={inputType} placeholder="Password" className='pass-input' />
                            <button type='button' onClick={passToggleShow} className='btn btn-toggle-show'>{eye === true ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                        </div>
                        <button type='submit' className='btn-send btn btn-outline-dark btn-shop px-3 py-2'>Sign Up</button>
                    </form>
                </div>

                <div className="form-container sign-in">
                    <form onSubmit={loginSubmit}>
                        <h1 className='my-4'>Sign In</h1>
                        <input type="email" ref={emailRef} placeholder="Email" />
                        <div className="pass-box">
                            <input type={inputType} ref={passwordRef} placeholder="Password" className='pass-input' />
                            <button type='button' onClick={passToggleShow} className='btn btn-toggle-show'>{eye === true ? <FaRegEye /> : <FaRegEyeSlash />}</button>
                        </div>
                        <a href="#">Forget Your Password?</a>
                        <button type='submit' className='btn btn-outline-dark btn-shop px-3 py-2'>Sign In</button>
                    </form>
                </div>

                <div className="toggle-container">
                    <div className="toggle">
                        <div className="toggle-panel toggle-left">
                            <h2>Welcome Back!</h2>
                            <p>Enter your personal details to use all of site features</p>
                            <button type='submit' className='btn btn-outline-light btn-shop px-3 py-2 hidden' onClick={() => setActive(false)}>Sign In</button>
                        </div>

                        <div className="toggle-panel toggle-right">
                            <h2>Hello, Friend!</h2>
                            <p>Register with your personal details to use all of site features</p>
                            <button className="btn btn-outline-light btn-shop px-3 py-2 hidden" onClick={() => setActive(true)}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccLogReg