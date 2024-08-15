import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/CSS/style.css';
import '../src/assets/CSS/bootstrap.min.css';
import '../src/assets/CSS/responsive.css';
import '../src/assets/CSS/animate.css';
import '../src/assets/CSS/icons.css';
import '../src/assets/CSS/meanmenu.css';
import '../src/assets/CSS/nice_select.css';
import '../src/assets/CSS/owl.carousel.css';
import '../src/assets/CSS/swiper.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log performance metrics
reportWebVitals(console.log);
