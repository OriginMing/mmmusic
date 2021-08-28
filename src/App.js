import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config';
import { BrowserRouter, HashRouter } from 'react-router-dom';

import FooterCom from './components/FooterCom/FooterCom';
import HeaderCom from './components/HeaderCom/HeaderCom';

import routes from './router';
export default memo(function App() {
  return (
    <HashRouter>
      <HeaderCom></HeaderCom>
      {renderRoutes(routes)}
      <FooterCom></FooterCom>
      </HashRouter>
  )
})

