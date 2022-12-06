import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleCourse from '../../SingleCourse/SingleCourse';

const AllCourse = () => {
    const allCourses = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-1 px-9 lg:grid-cols-12 gap-4 mt-4'>
                <div className='border col-span-4'>
                    {
                        allCourses.map(course => <p key={course.id} className='p-6 border-2'><Link to={`/singleItems/${course.id}`} className='link link-neutral'>{course.title}</Link></p>)
                    }
                </div>
                <div className=' border col-span-8'>
                    {
                        allCourses.map(allCor => <SingleCourse key={allCor.id} course={allCor}></SingleCourse>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllCourse;