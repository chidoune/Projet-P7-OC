import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './styles/index.css';
//import App from './App';
import Home from './pages/home/index';
import Logement from './pages/logement/index';
import About from './pages/about/index';
import Error from './components/Error/index';
import Header from './components/Header/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/logement/:id">
                <Logement />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="*">
                <Error />
            </Route>
            </Switch>
        </Router>         
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
