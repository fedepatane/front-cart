import MainMenu from './components/MainMenu';

import AppCart from './AppCart';

import data from './data';
import { useState } from 'react';
import axios from 'axios';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";




function App() {

  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu/>}/>
          <Route exact path="/cart" element={<AppCart/>}/>
        </Routes>
    </Router>
  );
}

export default App;
