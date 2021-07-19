import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery}) => {
  const BarStyling = {width:"20rem",background:"#F2F1F9", border:"none", padding:"0.5rem"};
  return (
    <div>
    <input 
     style={BarStyling}
     type = 'text'
     placeholder={"Search City"}
     value={searchQuery}
     onChange={e => setSearchQuery(e.target.value)}
        />
    </div>
);
};

export default SearchBar;


