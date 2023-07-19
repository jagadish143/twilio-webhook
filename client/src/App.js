import React, { useEffect } from 'react';

import './App.css';
import GetData from './components/FetchingData/GetData';
import AddDataForm from './components/AddData/AddDataForm';

function App() {
  useEffect(() => {
    console.log('UseEffect in App.js running');
  }, []);
  return (
    <div className="App">
      <h2>IDEATELS</h2>
      <AddDataForm />
      <GetData />
    </div>
  );
}

export default App;
