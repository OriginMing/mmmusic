import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import FooterCom from './components/FooterCom/FooterCom';
import HeaderCom from './components/HeaderCom/HeaderCom';

import routes from './router';
import store from './store/index'
export default memo(function App() {
  return (
    <Provider store = {store}>
    <HashRouter>
      <HeaderCom></HeaderCom>
      {renderRoutes(routes)}
      <FooterCom></FooterCom>
      </HashRouter>
      </Provider>
  )
})

