import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  return (
    <div style={{ fontFamily: 'system-ui', padding: '2rem' }}>
      <h1>Civic Accountability Platform</h1>
      <p>This is the starting point. We’ll add the complaint form here next.</p>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
