import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import PDF from 'react-to-pdf';

const ref = React.createRef();

const SingleCourseDetails = () => {
    const singleItem = useLoaderData()
    const {id, image_url, details, title, total_video, rating} = singleItem;
    const {number} = rating;
    console.log(singleItem)
    return (
        <div>
            <div className='flex justify-between w-3/5 border-2 mx-auto mt-4 p-3 rounded-md'>
                <h1 className='text-1xl lg:text-4xl text-bold'>{title}</h1>
                <PDF targetRef = {ref} fileName='course-example.pdf'>
                    {({toPdf}) => <button onClick={toPdf} className="btn btn-primary">DownLoad PDF</button>}
                </PDF>
            </div>
            <div ref={ref} className="card mx-auto mt-5 w-3/5 bg-base-100 shadow-xl">
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-3xl">{title}</h2>
                    <div className='flex'>
                        <p><span className='font-bold'>Total Video:</span> {total_video}</p>
                        <p><span className='font-bold'>Rating :</span> {number}</p>
                    </div>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/premium/${id}`}><button className="btn btn-primary">Get premium access</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourseDetails;