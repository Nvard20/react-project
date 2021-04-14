import React from 'react';
import './description.css';
import Coffetype from './CoffeType';
const Description = () => {
    return (
        <div className='desk' style={{
            background: `url('${process.env.PUBLIC_URL}/img/menu-bg.jpg')`
          }}>
            <div className='desc-about'  id='description'>
                <h1>What kind of Coffee we serve for you</h1>
                <p>Who are in extremely love with eco friendly system.</p>
                <div className='type-section'>
                    <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                </div>
            </div>
        </div>
    );
}

export default Description;
