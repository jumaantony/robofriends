import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons'
import {robots} from './robots'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
        <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} image={robots[0].image}/>
        <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} image={robots[1].image}/>
        <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} image={robots[2].image}/>
        <Card id={robots[3].id} name={robots[3].name} email={robots[3].email} image={robots[3].image}/>
        <Card id={robots[4].id} name={robots[4].name} email={robots[4].email} image={robots[4].image}/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
