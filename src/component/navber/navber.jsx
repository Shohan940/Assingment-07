import React from 'react';
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
                
                <div className="navbar-end gap-2">
                    <NavLink  to={'/'} className={ ({isActive})=>isActive ? 'btn text-white bg-[#244D3F]':'btn'}>Home</NavLink>
                    <NavLink to={'/timeline'} className={ ({isActive})=>isActive ? 'btn text-white bg-[#244D3F]':'btn'}>Timeline</NavLink>
                    <NavLink to={'/stats'} className={ ({isActive})=>isActive ? 'btn text-white bg-[#244D3F]':'btn'}>Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navber;