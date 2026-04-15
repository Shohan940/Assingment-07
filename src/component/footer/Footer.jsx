import React from 'react';
import facebook from '../../assets/facebook.png'
import instra from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'

const Footer = () => {
    return (
        <div className='bg-[#244D3F] text-white'>
            <div className='max-w-300 mx-auto space-y-8 p-8'>
                <div className='text-center space-y-6'>
                    <h1 className='text-6xl font-bold'>KeenKeeper</h1>
                    <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                    <p>Social Links</p>
                </div>
                <div className='flex justify-center gap-3'>
                    <img src={facebook} alt="Facebook" />
                    <img src={instra} alt="instragram" />
                    <img src={twitter} alt="twiuter" />
                </div>
                <div className='flex justify-between items-center'>
                    <p>© 2026 KeenKeeper. All rights reserved.</p>
                    <div >
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                        <span>Cookies</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;