import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css'
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import People from './components/People';
import Starships from './components/Starships';
import Movies from './components/Movies';
import Planets from './components/Planets';
import Vehicles from './components/Vehicles';
import Species from './components/Species';
import PageNotFound from './components/PageNotFound';
import Favorites from './components/Favorites';
import TermsofService from './components/TermsofService';

const store = createStore(rootReducer, applyMiddleware(logger));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="tos" element={<TermsofService/>} />
        <Route path="people" element={<People />} />
        <Route path="starships" element={<Starships />} />
        <Route path="movies" element={<Movies />} />
        <Route path="planets" element={<Planets />} />
        <Route path="vehicles" element={<Vehicles />} />
        <Route path="species" element={<Species />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

