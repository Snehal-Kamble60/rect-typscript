import React from 'react';
// import UserLogin from "../src/components/userLogin"
import Sidebar from './components/sideBar/sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Analytic from "./components/sideBar/analytics"
import Sports from './components/sideBar/sports';
import RunAndRate from './components/sideBar/runandrate';
import Role from './components/sideBar/role';
import Notification from './components/sideBar/notifications';
import ActivityLog from './components/sideBar/activityLog';

const App : React.FC =() =>{
  return(
    <>
    <Router>
      <Sidebar />
      <Routes>
      <Route path='/analytics' element={<Analytic />} />
      <Route path='/sports' element={<Sports />} />
      <Route path='/runandrate' element={<RunAndRate />} />
      <Route path='/role' element={<Role />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path='/activityLog' element={<ActivityLog />} />
      </Routes>
    </Router>
    </>
    // <div className='BookMaker'>
    //   <h1>BookMaker</h1>
    //   {/* <UserLogin /> */}
      
    // </div>
  )
}

export default App;
