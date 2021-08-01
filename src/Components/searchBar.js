import React from 'react';

const SearchBar = ({ searchQuery, setSearchQuery}) => {
  const BarStyling = {width:"200px",background:"#F2F1F9", border:"none", padding:"10px"};
  return (
    <div>
    <input 
     style={BarStyling}
     type = 'text'
     placeholder={"Search City"}
     value={searchQuery}
     onChange={e => setSearchQuery(e.target.value.toUpperCase())}
        />
    </div>
);
};

export default SearchBar;


