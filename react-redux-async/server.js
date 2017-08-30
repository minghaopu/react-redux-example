const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const webpackDevConfig = require('./webpack.dev');
const webpackProConfig = require('./webpack.prod');

const app = new express();
const DEFAULT_PORT = 3000;
const DEV_DIR = path.join(__dirname, 'src');
// const DIST_DIR = path.join(__dirname, 'dist');

const isDevelopment = process.env.NODE_ENV !== 'production';

if (isDevelopment) {
  const HTML_FILE = path.join(DEV_DIR, 'index.html');
  const compiler = webpack(webpackDevConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
  console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@development');
  
  app.get('/', (req, res, next) => {
    compiler.outputFileSystem.readFile(HTML_FILE, (err, result) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(result);
      res.end();
    })
  })
} else {
  // console.log('######################################################production');
  // const HTML_FILE = path.join(DIST_DIR, 'index.html');
  // const compiler = webpack(webpackProConfig);
  // app.use(express.static(DIST_DIR));
  // app.get('/', (req, res) => {
  //   res.sendFile('./index.html');
  // })
}

app.listen(DEFAULT_PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", DEFAULT_PORT, DEFAULT_PORT)
  }
});
