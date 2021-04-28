import React from 'react';
import './main.css';
import {Button} from '../Button';


const main = () => {
    return (
        <div className='main' id="main" id="true" style={{
            background: `url('${process.env.PUBLIC_URL}/img/mainjpg.jpg')`
          }} >
            <div className='inner-main'>
                <div className='text-main'>
                    <p>NOW YOU CAN FEEL THE ENERGY</p>
                
                    <h1>Start your day with a black Coffee</h1>
                
                        <h1 className='bounceInLeft'>
                            hello world ;)
                        </h1>
                
                    <Button  >Buy now</Button>
                </div>
                {/* <div className='img-main'><img src={process.env.PUBLIC_URL + '/img/unnamed.gif'} /></div> */}
            </div>
        </div>
    );
}

export default main;
