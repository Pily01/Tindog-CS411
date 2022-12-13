import './App.css';
import React from 'react';

import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen'
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
         <Route path ='/chat/:pet' element = {<ChatScreen/>}/>
         </Routes>
        <Routes>
        </Routes>
        <Routes>
         <Route path ='/chat' element = {<Chats/>}/>
         </Routes>
        <Routes>
          <Route path='/cards' element={<TinderCards/>}/>
        </Routes>
        <Routes>
          <Route path='/cards' element={<SwipeButtons/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
