
import './App.css';
import React from 'react';
import LoginPage from './components/LoginPage'
import FirstPage from './components/FirstPage'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/login" component={<LoginPage />}/>
      <Route exact path="/" component={<FirstPage/>}/>
    </Routes>
    </BrowserRouter>
  )
  
}

export default App;
