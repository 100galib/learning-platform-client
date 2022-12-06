import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContex } from '../Contex/GetUserContex';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {
    const [error, setError] = useState('');
    const {signIn, singInwithGoogle, signInwithGithub} = useContext(AuthContex);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/courses';

    const handleSubmit = (event) => {
        event.preventDefault();
        const Newform = event.target;
        const email = Newform.email.value;
        const password = Newform.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            // Newform.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.error('error', error);
            setError(error.message);
        })
    }
    const signInwithGoogleHandler = () => {
        singInwithGoogle()
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('');
        })
        .catch(error => {
            console.error('error', error)
        })
    }
    const signInwithGithubHandler = () => {
        signInwithGithub()
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
        })
        .catch(error => {
            console.error('error', error);
        })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Log in With your Email and Password.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <p>Dont Have an Account <Link to={'/regitration'} className="underline  text-sky-600">Signup now</Link></p>
                            </label>
                            <p className='text-red-300'>{error}</p>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                    </form>
                    <div className='flex mx-auto justify-around mb-4'>
                        <button onClick={signInwithGoogleHandler} className="btn-sm btn btn-outline mr-3"><FaGoogle className='mr-2'></FaGoogle> Google</button>
                        <button onClick={signInwithGithubHandler} className="btn-sm  btn btn-outline"><FaGithub className='mr-2'></FaGithub> Github</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

