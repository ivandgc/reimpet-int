import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import './index.css';
import App from '../shared/App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom'
import express from 'express'
import cors from 'cors'
import { renderToString } from 'react-dom/server'

const app = express();

app.use(express.static('public'))

app.get("*", (req, res, next) => {
  const markup = renderToString(<App />)

  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Reimpet International Corporation</title>
        <script src="/bundle.js" defer></script>
      </head>
      <body>
        <div id='app'>${markup}</div>
      </body>
    </html>
  `)
})

app.listen(3000, () => {
  console.log('Server is listening on port: 3000')
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
