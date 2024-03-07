import React from "react";
import {Link} from "react-router-dom";

export const Login = () => {
    return (
        <>
            <div className="container-fluid login">
                <div className="d-flex justify-content-center">
                    <div className="Login">
                        <div className="card logInCard">
                            <div className="container">
                                <h2 className="mb-4 mt-5 text-center">Login</h2>
                                <form>
                                    <div className="mb-4">
                                        <input type="text" className="form-control" id="username" name="username"
                                               placeholder="Username"
                                               required/>
                                    </div>
                                    <div className="mb-3">
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password"
                                               name="password"
                                               required/>
                                    </div>
                                    <Link to="/signin" className="btn btn-link pb-4 text-decoration-none"> Forgot
                                        Password</Link>
                                    <div className="text-center">
                                        <button type="submit" className="btn btn-primary w-100">Login
                                        </button>

                                    </div>
                                    <br/>
                                    <br/>
                                    <div className="d-flex align-items-center text-muted">
                                        <hr className="flex-grow-1"/>
                                        <span className="px-2">Don't have an Account?  </span>
                                        <hr className="flex-grow-1"/>
                                    </div>
                                    <div className="text-center mb-5">
                                        <i className="bi bi-person-circle"/>
                                        <Link to="/signin" className="btn btn-link text-decoration-none ">Create an
                                            Account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}