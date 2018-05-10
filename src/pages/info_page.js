import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/page-list.scss';

class InfoPage extends Component {
  render() {
    return (
      <div className="info-page">
        <div className="head">
          <div className="head-center">
            <Link to="/"><img src={require("../images/left-icon.png")} alt=""/></Link>
            <ul>
              <li><Link to="/">首页</Link></li>
            </ul>
          </div>
        </div>
        <div className="page-list-center">
        </div>
      </div>
    )
  };
};

export default InfoPage;