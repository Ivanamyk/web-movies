import React from 'react';
import { Layout, Main } from './components'
import { api } from './utilities'

function App() {
  api.get('/movie/70')

  return (
    <div className="App">
      <Layout>
        <Main />
      </Layout>
    </div>
  );
}

export default App;
