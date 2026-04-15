import React from 'react';
import Navber from '../component/navber/navber';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';
import HeroSec from '../component/navber/HeroSec';

const RootFile = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default RootFile;