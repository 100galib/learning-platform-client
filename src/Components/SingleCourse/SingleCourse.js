import React from 'react';
import { Link } from 'react-router-dom';

const SingleCourse = ({course}) => {
    const {id, title, short_title, image_url} = course;
    return (
        <div className="card my-4 mx-5 lg:card-side bg-base-100 shadow-xl">
            <figure><img src={image_url} alt="Album"/></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{short_title}</p>
                <div className="card-actions justify-end">
                <Link to={`/singleItems/${id}`}><button className="btn btn-primary">Go to Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;