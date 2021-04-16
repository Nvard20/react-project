import React from 'react';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';
import About from '../components/About/About'
import Description from '../components/Description/Description';
import Gallerry from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
const Home = () => {
    return (
        <div className='all-container'>
           <Header/>
           <Main/>
           <About/>
           <Description/>
           <Gallerry/>
           <Footer />
        </div>
    );
}

export default Home;
