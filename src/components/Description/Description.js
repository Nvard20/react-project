import React,{useState,useEffect} from 'react';
import './description.css';
import Coffetype from './CoffeType';
const Description = () => {

 useEffect(() => {
    function Add(){

        console.log('asdasd')
    }
    let add = document.getElementsByClassName('more');
   // add.addEventListener('click',Add);
    
 }, []);

    return (
        <div className='desk' style={{
            background: `url('${process.env.PUBLIC_URL}/img/back.jpg')`
          }}>
            <div className='desc-about'  id='description'>
                <h1>What kind of Coffee we serve for you</h1>
                <p>Who are in extremely love with eco friendly system.</p>
                <div className='type-section' >
                  
                    <Coffetype 
                      
                        src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                      
                    />
                     <Coffetype 
                     
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
                        name='Cappuccino'                        
                        price='89$'
                        text = 'Usage of the Internet is becoming more common due to rapid advance.'
                    />
                     <Coffetype 
                      src= { process.env.PUBLIC_URL + "/" + "img/hatik.jpg"}
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
