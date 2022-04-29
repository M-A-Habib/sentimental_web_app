import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';
import Popper from 'popper.js';

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

ReactDOM.render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>,
  document.getElementById('root')
);

// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://qc8pe7whz9.execute-api.us-east-1.amazonaws.com/default/gatewayFunction");
// xhr.send();
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     //parse JSON datax`x
//     let data = JSON.parse(xhr.responseText);
//     console.log(data.count);
//     console.log(data.products);
//   } else if (xhr.status === 404) {
//     console.log("No records found");
//   }
// }

// xhr.onerror = function() {
//   console.log("Network error occurred");
// }

// xhr.onprogress = function(e) {
//   if (e.lengthComputable) {
//     console.log(`${e.loaded} B of ${e.total} B loaded!`);
//   } else {
//     console.log(`${e.loaded} B loaded!`);
//   }
// }

// fetch('https://63fx4b17s8.execute-api.us-east-1.amazonaws.com/default/toFront')
//     .then ((response) => response.text())
//     .then (data => {
//       console.log(data)
//     });

// const fetch = require('node-fetch');

// const url = 'https://twinword-sentiment-analysis.p.rapidapi.com/analyze/?text=great%20value%20in%20its%20price%20range!';

// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Host': 'twinword-sentiment-analysis.p.rapidapi.com',
//     'X-RapidAPI-Key': '2cd74ea2b0msh1f7f6232069c9b1p1185c8jsncd558e909536'
//   }
// };

// fetch(url, options)
// 	.then(res => res.json())
// 	.then(json => console.log(json))
// 	.catch(err => console.error('error:' + err));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
