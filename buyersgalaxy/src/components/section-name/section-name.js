import React from 'react';
import './section-name.css';

function SectionName({ name }) { // Destructure the 'name' prop here
    return (
        <div className='title'>
           <span> {name}</span>
        </div>
    );
} 
export default SectionName;
 