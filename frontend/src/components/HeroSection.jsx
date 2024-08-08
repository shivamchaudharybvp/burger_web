// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from './Navbar';  // Make sure the path is correct
import '../App.css';  // Ensure correct path to your CSS file

const HeroSection = () => {
    return (
        <section className='heroSection' id="heroSection">
            <Navbar />
            <div className="container">
                <div className="banner">
                    <div className="largerBox">
                        <h1 className='title'>Delicious</h1>
                    </div>
                    <div className="combined_boxes">
                        <div className="imageBox">
                            
                        </div>
                        <div className="textAndLogo">
                            <div className="textWithSvg">
                                <h1 className="title"></h1>
                                <h1 className="title Dishes_title"></h1>
                                <img src="/threelines.svg" alt="three" />
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div className="banner">
                    <div className="imageBox">
                       
                    </div>
                    <h1 className="title Dishes_title">Burger</h1>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;