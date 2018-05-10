import React from 'react';
import {HashRouter, Route} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Home from './pages/home_page';
import InfoPage from './pages/info_page';
import registerServiceWorker from './registerServiceWorker';
const routers = (
  <HashRouter>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/pageList" component={InfoPage}/>
    </div>
  </HashRouter>
);

ReactDOM.render(routers, document.getElementById('root'));
registerServiceWorker();
