import React from 'react'; // Import React if not already done
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // For React 18 and newer
import App from './App.jsx'; // Make sure this path is correct

// Ensure there is a div with id='root' in your public/index.html file
const rootElement = document.getElementById('root');

// Render the App component inside StrictMode for development checks
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
} else {
  console.error('Root element not found in index.html');
}
