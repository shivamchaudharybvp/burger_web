// eslint-disable-next-line no-unused-vars
import React from 'react';
import { data } from '../restApi.json';

const WhoAreWe = () => {
    return (
        <section className='who_are_we' id="whoweare">
            <div className="container">
                <div className="text_banner">
                    {data[0].whoweare.map(element => {
                        return (
                            <div className="card" key={element.id}>
                                <h1 style={{ fontWeight: "300" }} className='heading'>{element.number}</h1>
                                <p>{element.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
export default WhoAreWe;