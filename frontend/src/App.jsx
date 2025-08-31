import { useState } from 'react'

import './App.css'
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import LandingPage from './pages/landing'
import Authentication from './pages/authentication';
import { AuthProvider } from './contexts/AuthContext';
import VideoMeetComponent from './pages/VideoMeet';
import HomeComponent from './pages/Home';
import History from './pages/History';

function App() {

  return (
    <>
    <div className='App'>
      <Router>

      <AuthProvider>

        <Routes>
          <Route path ="/" element={<LandingPage/>}></Route>
          <Route path='/auth' element={<Authentication/>}></Route>

          <Route path='/home' element = {<HomeComponent/>}></Route>

          <Route path='/history' element ={<History/>}></Route>
          <Route path='/:url' element= {<VideoMeetComponent/>}></Route>
          
        </Routes>
        </AuthProvider>
      </Router>
    </div>
    </>
  )
}

export default App
