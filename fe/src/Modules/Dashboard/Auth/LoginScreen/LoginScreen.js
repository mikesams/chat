import React, { useState } from 'react'
import './LoginScreen.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthService from '../../../../Services/auth.service';
import TokenService from '../../../../Services/token.service';
import { addActions } from '../../../../Store/features/user.slice';
import { useDispatch } from 'react-redux';
import { socket } from '../../../../App'

const LoginScreen = () => {

    const { register, handleSubmit, formState: { errors }, setError } = useForm();
    const [showPassword, setToShowPassword] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const save = async (data) => {
        console.log(data);
        try {
           const res = await AuthService.login(data);
           dispatch(addActions(res?.actions || []));
           console.log(res);
           socket.emit('user', {id:res.id})
           navigate('/app');
        } catch (error) {
            console.log(error);
            if (error?.response?.status === 400) {
                setError('email', {
                    message: error?.response?.data?.message
                }, {
                    shouldFocus: true
                })
            }
        }
    }

    return (
        <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary" style={{ width: '100%', height: '100vh' }}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12 col-md-6 offset-xl-2 offset-md-1 order-md-2 mb-5 mb-md-0">
                        <div className="text-center">
                            <img src='/assets/img/4826435.jpg' alt="..." className="img-fluid" />
                        </div>
                    </div>
                    <div className="col-12 col-md-5 col-xl-4 order-md-1 my-5">
                    <a className="masthead-brand d-flex justify-content-center" onClick={() => navigate('/home')}>
                            <img style={{ width: '270px', marginTop: '-15px', textAlign: 'center', marginBottom: '50px' }} src="/assets/img/logo.jpeg" alt="ptc" />
                        </a>
                        <h1 className="display-4 text-center mb-3">
                            Sign in
                        </h1>
                        <p className="text-muted text-center mb-5">
                            Access to your dashboard.
                        </p>
                        <form onSubmit={handleSubmit(save)}>
                            <div className="form-group">

                                <label className="form-label">
                                    Email Address
                                </label>
                                <input type="text"
                                    {...register("email", {
                                        required: 'Required Input', pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Invalid Email'
                                        }
                                    })}
                                    className="form-control" placeholder="name@address.com" />
                                {
                                    errors?.email && (
                                        <small className='text-danger mt-3 ms-3'>{errors?.email?.message}</small>
                                    )
                                }

                            </div>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col">
                                        <label className="form-label">
                                            Password
                                        </label>

                                    </div>
                                    <div className="col-auto">
                                        <a href="password-reset-cover.html" className="form-text small text-muted">
                                            Forgot password?
                                        </a>

                                    </div>
                                </div>

                                <div className="input-group input-group-merge">

                                    <input
                                        {...register("password", { required: 'Required Input', minLength: { value: 8, message: 'Minimum length of 8 characters required' } })}
                                        className="form-control" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" />

                                    <span className="input-group-text" style={{ cursor: 'pointer' }} onClick={() => setToShowPassword(!showPassword)}>
                                        {
                                            showPassword ? (
                                                <FaEyeSlash />
                                            ) : (

                                                <FaEye />
                                            )
                                        }
                                    </span>

                                </div>
                                {
                                    errors?.password && (
                                        <small className='text-danger mt-3 ms-3'>{errors?.password?.message}</small>
                                    )
                                }
                            </div>

                            <button className="btn btn-lg w-100 btn-primary mb-3" type='submit'>
                                Sign in
                            </button>

                            <div className="text-center">
                                <small className="text-muted text-center">
                                    Don't have an account yet? <a onClick={() => navigate('/auth/signup')} style={{ textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}>Sign up</a>.
                                </small>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen
