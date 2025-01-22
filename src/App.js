import React from 'react';
import RestaurantList from './components/RestaurantList';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Les 5 Meilleurs Restaurants de L'Isle-Adam</h1>
      </header>
      <main>
        <RestaurantList />
      </main>
    </div>
  );
}

export default App;