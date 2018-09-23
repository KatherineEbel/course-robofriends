import React from 'react';

const SearchBox = ({searchChange}) => {
  return (
    <div>
      <input
        aria-label="Search Robots"
        onChange={searchChange}
        className="pa3 ba b--green bg-lightest-blue"
        type="search" placeholder="search robots"/>
    </div>
  );
};

export default SearchBox;