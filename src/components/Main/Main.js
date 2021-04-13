import React from 'react';
import './main.css';
import {Button} from '../Button';
const main = () => {
    return (
        <div className='main' id="main" id="true" style={{
            background: `url('${process.env.PUBLIC_URL}/img/header-bg.jpg')`
          }} >
            <div className='text-main'>
                <p>NOW YOU CAN FEEL THE ENERGY</p>
                <h1>Start your day with a black Coffee</h1>
                <Button  >Buy now</Button>
            </div>
        </div>
    );
}

export default main;
