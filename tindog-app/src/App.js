import './App.css';
import Header from './Header';
import React from 'react';
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
        <Routes>
          <Route path='/' element={<Header/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
