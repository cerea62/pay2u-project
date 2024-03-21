import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'
import categories from '../../utils/categories';

function Category(props) {
    return (
        <ul className='category'>
            {categories.map(item => (
                <li key={item.id} className="category__card">
                    <Link to='/'>
                        <img className="categoty__image" src={item.image} alt="#" />
                    </Link>
                </li>
            ))}

        </ul>
    );
}

export default Category;