import React from 'react';

import MainHeader from './main-header/main-header';
import SubHeader from './sub-header/sub-header';
import HeaderStyles from './header-styles';

const Header = ({ hideSubHeader }) => {

  return (
    <HeaderStyles>
      <MainHeader />
      {
        !hideSubHeader && <SubHeader />
      }
    </HeaderStyles>
  )
}

export default Header;
