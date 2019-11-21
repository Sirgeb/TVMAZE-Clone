import React from 'react';

import SubHeaderStyles from './sub-header-styles';

const SubHeader = () => {

  return (
    <SubHeaderStyles>
      <div className="container">
        <div className="header-info">
            <p>Hi! Take a look at our <strong>latest shows</strong>!</p>
            <p>Don't forget to Sign up{":-)"}</p>
        </div>
      </div>
    </SubHeaderStyles>
  )
}

export default SubHeader;
