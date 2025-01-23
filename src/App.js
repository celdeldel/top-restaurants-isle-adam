import React from 'react';
import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Les 20 Meilleurs Restaurants de L'Isle-Adam</h1>
        <p className="subtitle">Classés selon les avis Google Maps</p>
      </header>
      <main>
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;