import axios from 'axios';
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import Cookies from 'universal-cookie';

const AccLogReg = () => {
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
        try {
            e.preventDefault();
            const response = await axios.post(`https://coppola-movie.vercel.app/api/auth/login`, {
                email: emailRef.current.value,
                password: passwordRef.current.value
            })

            console.log(response.data);
            if (response.status === 201 || response.status === 200) {
                localStorage.setItem("token", response.data?.token);
                localStorage.setItem("role", response.data.user.role);
                Swal.fire({
                    title: `${response.data.message}`,
                    icon: "success",
                    preConfirm: () => { navigate('/') }
                })
            }

        } catch (error) {
            console.log(error);
        }
    }

    const registerSubmit = async (e) => {
        try {
            e.preventDefault();
            const regsData = await axios.post("https://coppola-movie.vercel.app/api/auth/register", {
                name: regNameRef.current.value,
                surname: regSnameRef.current.value,
                email: regEmailRef.current.value,
                password: regPassRef.current.value
            })
            if (regsData.status === 201 || regsData.status === 200) {
                // Cookies.set("x-auth-token", res.data);
                // localStorage.setItem("user", 'true');
                Swal.fire({
                    title: `${regsData.data.message}`,
                    icon: "success",
                    preConfirm: () => { navigate('/') }
                })
            }
            console.log(regsData);

        } catch (error) {
            console.log(error);

        }

        if (err.status === 400 || err.status === 401) {
            let alertText = "";
            if (err.response.data.match("password")) {
                alertText = err.response.data
            } else if (err.response.data.match("empty")) {
                alertText = err.response.data
            } else if (err.response.data.match("email")) {
                alertText = err.response.data
            }
            else if (err.response.data.match("already")) {
                alertText = err.response.data
            }
            Swal.fire({
                title: alertText,
                icon: "error"
            })
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