import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          {process.env.REACT_APP_WELCOME_MESSAGE}
        </p>
      </header>
    </div>
  );
}

export default App;
