import React from 'react';
import Navber from '../component/navber/navber';
import { Outlet } from 'react-router';
import Footer from '../component/footer/Footer';
import HeroSec from '../component/navber/HeroSec';
import { ToastContainer } from 'react-toastify';

const RootFile = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet/>
            <Footer/>

            <ToastContainer />
        </div>
    );
};

export default RootFile;