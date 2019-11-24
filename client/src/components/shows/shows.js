import React from 'react';

import ShowsStyle, { Center } from './shows-styles';
import ShowCard from '../show-card/show-card';

const Shows = ({ shows, onSearch }) => {

  if (!shows.length) {
    return <Center>No Result... Make a search.</Center>;
  }

  return (
    <ShowsStyle>
      {
        onSearch ? shows.map(show => <ShowCard {...show.show} key={show.show.id}/>)
                      :
        shows.map(show => <ShowCard {...show} key={show.id}/>)
      }
    </ShowsStyle>
  )
}

export default Shows;
