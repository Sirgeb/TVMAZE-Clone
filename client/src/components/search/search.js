import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import SearchStyles from './search-styles';

const Search = ({ hideSearchButton, handleChange, searchKeyword, history }) => {
  const { pathname } = history.location;
  const [keyword, setKeyword] = useState(""); 

  function handleSearch(event) {
    const keyword = event.target.value;
    setKeyword(keyword);
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push(`/search/${keyword}`);
  }

  return (
    <SearchStyles>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Search Shows" 
          value={searchKeyword}
          onChange={pathname === "/" ? handleSearch : handleChange} 
        />
        {
          !hideSearchButton && <button type="submit">Search</button>
        }
      </form>
    </SearchStyles>
  )
}

export default withRouter(Search);
