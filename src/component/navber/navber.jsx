import React from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { IoMdTime } from 'react-icons/io';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navber = () => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    
                    <a className="btn btn-ghost text-xl">KeenKeeper</a>
                </div>
                
                <div className="navbar-end gap-2">
                    <NavLink  to={'/'} className={ ({isActive})=>isActive ? 'btn text-white bg-[#244D3F]':'btn'}><AiOutlineHome /> Home</NavLink>
                    <NavLink to={'/timeline'} className={ ({isActive})=>isActive ? 'btn text-white bg-[#244D3F]':'btn'}><IoMdTime />Timeline</NavLink>
                    <NavLink to={'/stats'} className={ ({isActive})=>isActive ? 'btn text-white bg-[#244D3F]':'btn'}><TfiStatsUp />Stats</NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navber;