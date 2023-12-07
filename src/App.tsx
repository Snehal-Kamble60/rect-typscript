import React from 'react';
import UserLogin from "../src/components/userLogin"
import './App.css';

const App : React.FC =() =>{
  return(
    <div className='BookMaker'>
      <h1>BookMaker</h1>
      <UserLogin />
    </div>
  )
}

export default App;
