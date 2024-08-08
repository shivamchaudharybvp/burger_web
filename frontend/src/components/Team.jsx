// eslint-disable-next-line no-unused-vars
import React from 'react';
import { data } from '../restApi.json';


const Team = () => {
    if (!data || !data[0] || !data[0].team) {
        return <div>No data available</div>;
    }

    return (
        <section className="team" id="team">
            <div className="container">
                <div className="heading_section">
                    <h1>TEAM FOR YOU</h1>
                    <p>Our team which leads the whole state for deliciousness</p>
                </div>
                <div className="team_container">
                    {
                        data[0].team.map(element => (
                            <div className="card" key={element.id}>
                                <img src={element.image} alt={element.name} />
                                <h3>{element.name}</h3>
                                <p>{element.designation}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Team;
