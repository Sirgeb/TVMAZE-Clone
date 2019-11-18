import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

import Header from '../../components/header/header';
import SearchBox from '../../components/search/search';
import Shows from '../../components/shows/shows';
import Spinner from '../../components/spinner/Spinner';
import MovieGenre from '../../components/movie-genre/movie-genre';
import { Center, Wrapper } from './search-styles';

const Search = ({ history, match }) => {
  const { keyword } = match.params;

  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");


  useEffect(() => {
    if (keyword) setQuery(keyword);

    const fetchPosts = async () => {
      setLoading(true);
      const url = `http://api.tvmaze.com/search/shows?q=${query}`;
      const res = await axios.get(url);
      setShows(res.data);
      setLoading(false);
    }

    fetchPosts();
  }, [query, keyword]);

  function handleInputChange(event) {
    const query = event.target.value;

    if (keyword) history.push('/search');

    if (query.length) {
      setLoading(true);
      setQuery(query);

    } else {
      setQuery(query);
      setShows([]);
    }
  }

  return (
    <Fragment>
      <Header hideSubHeader="true" />
        <SearchBox 
          hideSearchButton="true"
          handleChange={(event) => handleInputChange(event)}
          searchKeyword={keyword ? keyword : query}
          />
        <Center>
          <Wrapper>
            <MovieGenre /> 
          </Wrapper>
          {
            loading ? <Spinner /> : <Shows onSearch={true} shows={shows} />
          }
        </Center>
    </Fragment>
  )
}

export default withRouter(Search);
