import React from 'react';
import { Link } from 'react-router-dom';

import MainHeaderStyles from './main-header-styles';

const MainHeader = () => {

  return (
    <MainHeaderStyles>
      <div className="container">
          <div className="head">
              <div className="logo"><Link to="/"><strong>TV</strong>MAZE</Link></div>
              <div className="nav">
                <ul>
                  <li><Link to="/">Shows</Link></li>
                  <li>Login</li>
                  <li>Register</li>
                  <li>About us</li>
                </ul>
              </div>
          </div>
      </div>
    </MainHeaderStyles>
  )
}

export default MainHeader;
