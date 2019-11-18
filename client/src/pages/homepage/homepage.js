import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/header/header';
import Spinner from '../../components/spinner/Spinner';
import Search from '../../components/search/search';
import MovieGenre from '../../components/movie-genre/movie-genre';
import Shows from '../../components/shows/shows';
import Pagination from '../../components/pagination/pagination';
import { Center } from './homepage-styles';

const Homepage = () => {
  
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [postsPerPage] = useState(12);

  function getPageCount(totalResults, denominator) {
    const divisible = 0 === totalResults % denominator;
    const valueToBeAdded = divisible ? 0 : 1;
    return Math.floor(totalResults / denominator) + valueToBeAdded;
  };

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const url = `http://api.tvmaze.com/shows`;
      const res = await axios.get(url);
      setShows(res.data);
      setTotalPages(getPageCount(res.data.length, postsPerPage));
      setLoading(false);
    }

    fetchPosts();
  }, [currentPageNo, postsPerPage]);

  function handlePageClick(event, type) {
    event.preventDefault();
    const updatedPageNo = 'prev' === type ? currentPageNo - 1 : currentPageNo + 1;

    if (!loading) {
      setLoading(true);
      setCurrentPageNo(updatedPageNo);
    }
  }

  function sliceShows(currentPageNo, postsPerPage, shows) {
    const indexOfLastPost = currentPageNo * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    return shows.slice(indexOfFirstPost, indexOfLastPost);
  }

  return (
    <Fragment>
      <Header />
        <Search />
        <Center>
          <MovieGenre />
          <Pagination 
             handlePrevClick={(event) => handlePageClick(event, 'prev')}
             handleNextClick={(event) => handlePageClick(event, 'next')}
             showPrevLink={1 < currentPageNo }
             showNextLink={totalPages > currentPageNo}
             loading={loading}
          />
          {
            loading ? <Spinner /> : <Shows shows={sliceShows(currentPageNo, postsPerPage, shows)} />
          }
          <Pagination 
             handlePrevClick={(event) => handlePageClick(event, 'prev')}
             handleNextClick={(event) => handlePageClick(event, 'next')}
             showPrevLink={1 < currentPageNo }
             showNextLink={totalPages > currentPageNo}
             loading={loading}
          />
        </Center>
    </Fragment>
  )
}

export default Homepage;
