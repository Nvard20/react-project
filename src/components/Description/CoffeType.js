import React from 'react';
import './description.css';

const CoffeType = (props) => {
  
    return (
        <div className='single-menu ' id={props.id}>
            <div className="title-div">
                <h4>{props.name}</h4>
                <span className='img_cup'> <img src= {props.src}/></span>
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
