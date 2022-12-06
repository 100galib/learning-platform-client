import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PremeumComponent = () => {
    const singleItem = useLoaderData();
    const {title, total_video} = singleItem;
    return (
        <div>
            <h1 className='text-5xl text-rose-400 text-center mt-5'>{title}</h1>
            <h3 className='text-4xl text-green-500 text-center mt-3'>Total Vedio - {total_video}</h3>
        </div>
    );
};

export default PremeumComponent;