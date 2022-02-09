import React from 'react';
import './App.css';
import './bootstrap/bootstrap.min.css'
import Api from './components/Api';



function App() {
  
  return (
  <div className='App'>
    <div className='container'>
     <React.StrictMode>
       <Api/>
         
     </React.StrictMode>
   </div> 
  </div>     
  );
}
export default App;
