import React from 'react';
import { Link } from 'react-router-dom';
import Bag from '../assets/icons/bag.png';
import Search from './Search';

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-3 px-4 md:px-14 text-2xl pb-3 border-b-2 border-black w-full">
      <div className="flex items-center mb-2 md:mb-0 flex-wrap">
        <Link to={'/'} className="pl-4">
          Home
        </Link>
        <Link to={'/cart'} className="ml-4">
          <img src={Bag} alt="" className="w-8" />
        </Link>
      </div>
      <div className="flex items-center">
        <Search />
      </div>
    </div>
  );
};

export default Header;
