import './App.css';
import React from 'react';

import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
         <Route path ='/chat' element = {<Chats/>}/>
         </Routes>
        <Routes>
          <Route path='/' element={<TinderCards/>}/>
        </Routes>
        <Routes>
          <Route path='/' element={<SwipeButtons/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
