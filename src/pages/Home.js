import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About'
import Description from '../components/Description/Description';
import Gallerry from '../components/Gallery/Gallery';
const Home = () => {
    return (
        <div>
           <Header/>
           <Main/>
           <About/>
           <Description/>
           <Gallerry/>
        </div>
    );
}

export default Home;
