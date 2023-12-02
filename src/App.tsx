import React from 'react';
import UserLogin from "../src/components/userLogin"
import './App.css';

const App : React.FC =() =>{
  return(
    <div className='BookMaker'>
      <span className='modelName'>BookMaker</span>
      <UserLogin />
    </div>
  )
}

export default App;
