import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='grid grid-cols-1 px-9 lg:grid-cols-2 mt-8'>
            <div className='px-3 pt-6'>
                <h1 className='text-4xl font-medium text-orange-400'>Welcome To <span className='text-emerald-500'>Code Solution Forces</span></h1>
                <p className='mt-3 tracking-wider leading-7'>There many courses out thre, but there isnt any specific courses to relay on. The only thing one student is needed to proper guide line. Our courses is the only way to get started your primary setup. We are commited to get where you need to go. So dont think twise start today now</p>
                <Link to={'/courses'}><button className='mt-9 bg-red-400 px-4 py-3 rounded hover:bg-red-500 mb-4'>Get Started</button></Link>
            </div>
            <div>
                <img className='w-3/3 lg:w-2/3 mx-auto' src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;