import React from 'react';
import { Screens } from './screens'
import { getMovies } from './api/getMovies'


function App() {
  getMovies()
  return (
    <div className="App">
      <Screens />
    </div>
  );
}

export default App;
