import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => (
  <div>
    <h1>🎯 Tap Rush 80’s!</h1>
    <p>Tape, vibre, deviens une légende rétro !</p>
    <div>
      <a href="#">Télécharger sur Google Play</a>
      <a href="#">Télécharger sur App Store</a>
    </div>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
