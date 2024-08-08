// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import '../App.css'; // Make sure to import your CSS

const About = () => {
    return (
        <section className='about' id="about">
            <div className="container">
                <div className="banner">
                    <div className="top">
                        <h1 className="heading">ABOUT US</h1>
                        <p>Feel Your Crispyness in One Bite.</p>
                    </div>
                    <p className="mid">
                        Something Spicy, Something Crispy. Red hot Burger, with Dynamic Flavour Types Which make your Mood right.
                    </p>
                    <Link to={"/"} className="explore-link">
                        Explore Your Mood 
                        <span>
                            <HiOutlineArrowNarrowRight />
                        </span>
                    </Link>
                </div>
                <div className="banner">
                    <img src="/about.png" alt="about" />
                </div>
            </div>
        </section>
    );
}

export default About;
