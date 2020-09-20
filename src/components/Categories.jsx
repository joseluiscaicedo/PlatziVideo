import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    {/* <img className='carousel-item__img' src='https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='foto' /> */}
    <h3 className='categories__title'>{title}</h3>
    {children}
  </div>
);

export default Categories;
