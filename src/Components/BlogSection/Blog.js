import React from 'react';

const Blog = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 mx-auto mb-5">
                <figure><img src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Cors" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is cors?</h2>
                    <p>The CORS Policy Enables Cross-origin resource sharing (CORS) in Express Gateway. CORS defines a way in which a browser and server can interact and determine whether or not it is safe to allow a cross-origin request.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 mx-auto mb-5">
                <figure><img src="https://images.unsplash.com/photo-1601119479271-21ca92049c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="Firebase" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>The Firebase Realtime Database lets one build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <p className='font-bold'>Other Authentication are :</p>
                    <ul>
                        <li>Auth0</li>
                        <li>MongoDB</li>
                        <li>Passport</li>
                        <li>Okta</li>
                    </ul>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 mx-auto mb-5">
                <figure><img src="https://images.unsplash.com/photo-1567030849710-a50bbc3e16c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Private Route" /></figure>
                <div className="card-body">
                    <h2 className="card-title">How does the private route work?</h2>
                    <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mt-5 mx-auto mb-5">
                <figure><img src="https://images.unsplash.com/photo-1608452964553-9b4d97b2752f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Node" /></figure>
                <div className="card-body">
                    <h2 className="card-title">What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009. Developers use Node.js to create server-side web applications, and it is perfect for data-intensive applications since it uses an asynchronous, event-driven model.</p>
                    <p>Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;