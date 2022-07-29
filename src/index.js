import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Calculator from './components/calculator';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';
import Heroes from './components/heroes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Tabs defaultActiveKey="heroes" id="uncontrolled-tab-example">
        <Tab eventKey="calculator" title="Calculadora">
          <Calculator/>
        </Tab>
        <Tab eventKey="heroes" title="Héroes">
          <Heroes/>
        </Tab>
    </Tabs>    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
