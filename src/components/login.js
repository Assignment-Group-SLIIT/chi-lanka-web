import React, { useState } from 'react'
//import "./style.scss";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {

    let history = useHistory();
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState([]);

    function checkUser(e) {//function checks the availbilty of the admin within the system
        e.preventDefault();
        //pass the username and password and if exact user exsits will be directed to dashbord else it will display error for unavailable user
        axios.get(`http://localhost:4000/login/get/${username}/${password}`).then((response) => {
            console.log(response.data);
            setLogin(response.data.login);
            if (response.data.login === null) {
                Swal.fire({
                    title: 'Oops!',
                    text: 'User not available',
                    icon: 'error',
                    showConfirmButton: false,
                    timer: 1500
                }
                )
            } else {
                if (response.data.login.username == "SiteManager") {
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'Welcome back Site Manager',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2500
                         })
                    history.push("/rlList");
                }else if(response.data.login.username == "Supervisor"){
                    Swal.fire({
                        title: 'Sucess!',
                        text: 'Welcome back Supervisor',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2500
                         })
                    history.push("/pOrders");
                }
            }
        }).catch((err) => {
            alert(err.response.data.error)

        })
    }
    return (
        <>
            <div className="page-body">

                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>

                <header>
                    <nav
                        className="navbar navbar-expand-lg navbar-light fixed-top"
                        id="mainNav"
                    >
                        <div className="container-fluid">
                            <a className="navbar-brand js-scroll-trigger" href="/">
                                <img src="https://i.ibb.co/L94jBtF/chi-lanka.png" width="300px" height="100px" alt="todo" border="0" />

                            </a>
                        </div>
                    </nav>
                </header>
            </div>

            <div className="page-component-body pt-5 mt-5">

                <div class="row no-gutter">
                    <div class="col-md-6 d-none d-md-flex bg-image"></div>
                    <div class="col-md-6 bg-light">
                        <div class="login d-flex align-items-center py-5">

                            <div class="container login-container">
                                <div class="row">
                                    <div class="col text-center">
                                        <h1>Welcome back!</h1>
                                        <form onSubmit={checkUser}>
                                            <div class="form-group mb-3">
                                                <input id="loginInput" type="input" placeholder="Username" required autofocus="" class="login-form-input px-4"
                                                    onChange={(event) => { setUserName(event.target.value); }} />
                                            </div>
                                            <div class="form-group mb-5">
                                                <input id="loginPassword" type="password" placeholder="Password" required="" class="login-form-input px-4 text-primary"
                                                    onChange={(event) => { setPassword(event.target.value); }} />
                                            </div>
                                            <div className="text-right">
                                                <p><a href="#" className="text-danger">Forget Password? </a></p>
                                                <br></br><br></br>
                                            </div>
                                            <div>
                                                <center>
                                                    <button type="submit" class="btn btn-block text-uppercase text-light btn-login">Sign in</button>
                                                </center>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default Login;


