import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../components/header/header';
import MoviePreview from '../../components/movie/movie';
import Cast from '../../components/cast/cast';
import Spinner from '../../components/spinner/Spinner';
import { Center } from './show-styles';

const Show = (props) => {
  const { id } = props.match.params;
  const [show, setShow] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const url = `https://api.tvmaze.com/shows/${id}?embed=cast`;
      const res = await axios.get(url);
      setShow(res.data);
      setLoading(false); 
    }

    fetchPosts();
  }, [id]);

  return (
    <Fragment>
      <Header hideSubHeader="true" />
      {
        loading ? 
         <Spinner /> 
         : 
         <Center >
           <MoviePreview {...show} />
           <Cast {...show._embedded} />
         </Center>
      }
    </Fragment>
  )
}

export default Show;
