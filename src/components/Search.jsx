import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
  
    
    if (searchTerm.trim() !== '') {
      // Navigate to the search results page with the search term in the URL
      navigate(`/search/${searchTerm}`);
    }
    // Opt
  };

  return (
    <form onSubmit={handleSearch} className="space-x-2 flex ">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-white text-md px-2 border-black border-[1.5px] rounded-md outline-none w-3/4 required"
        placeholder="Search..."
      />
      <button type="submit" className="border-[1.5px] border-black rounded-md px-2 bg-white">
        Search
      </button>
    </form>
  );
}
