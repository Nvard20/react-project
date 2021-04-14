import React from 'react';
import './description.css';

const CoffeType = (props) => {
    return (
        <div className='single-menu'>
            <div className="title-div">
                <h4>{props.name}</h4>
                    <p className="price ">
                        {props.price}
                    </p>
            </div>
            <p>
              {props.text}
            </p>
         </div>
    );
}

export default CoffeType;
