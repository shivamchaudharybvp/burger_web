// eslint-disable-next-line no-unused-vars
import React from 'react';
import { data } from '../restApi.json'; // Ensure the correct path and data structure

// eslint-disable-next-line no-unused-vars
const Menu = () => {
    return (
        <section className='menu' id='menu'>
            <div className="container"> {/* Corrected class name */}
                <div className="heading_section">
                    <h1 className='heading'>Our Restaurant Popular Burgers</h1>
                    <p>At our restaurant, we pride ourselves on serving some of the most delectable burgers in town, each crafted with fresh ingredients and a passion for quality. Our signature burger, the Classic Cheeseburger, features a juicy beef patty topped with melted cheddar, crisp lettuce, ripe tomatoes, and our special house sauce, all nestled in a toasted sesame bun. For those who enjoy a bit of a kick, the Spicy Jalapeño Burger is a favorite, with pepper jack cheese, sliced jalapeños, and a smoky chipotle mayo that tantalizes the taste buds. Our BBQ Bacon Burger is another crowd-pleaser, combining a savory beef patty with crispy bacon, tangy BBQ sauce, and sharp cheddar cheese. Vegetarians are not left out either, with our Veggie Delight Burger offering a flavorful black bean patty, fresh avocado, and a zesty cilantro-lime sauce. Each burger is made to order and served with a side of golden fries, ensuring a satisfying meal that keeps our customers coming back for more.</p>
                </div>
                <div className="dishes_container">
                    {
                        data[0].Burgers.map(element => {
                            return (
                                <div className="card" key={element.id}>
                                    <img src={element.image} alt={element.title} />
                                    <h3>{element.title}</h3>
                                    <button>{element.category}</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Menu;
