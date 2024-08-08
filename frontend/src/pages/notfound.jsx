// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'; // Corrected the import

// eslint-disable-next-line no-unused-vars
const NotFound = () => {
    return (
        <>
            <section className='notfound'>
                <div className="container"> {/* Fixed typo here */}
                    <img src="./notFound.svg" alt="Not Found" />
                    <h1>Need help!!</h1>
                    <p>Go Back to Previous Page</p>
                    <Link to='/'>
                        Back To Home <span><HiOutlineArrowNarrowRight /></span>
                    </Link>
                </div>
            </section>
        </>
    );
}

export default NotFound;
