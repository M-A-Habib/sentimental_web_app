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

// fetch('https://twitter-stream-raw.s3.amazonaws.com/raw/2022/04/09/20/PUT-S3-qFeoj-4-2022-04-09-20-23-06-823a4864-0c0f-40a0-854b-e69b89b5bf94.json')
//     .then ((response) => response.text())
//     .then (data => {
//       console.log(data)
//     });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
