const path = require('path');
const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');


const app = express();


const DEFAULT_PORT = 3000;
const DEV_DIR = path.join(__dirname, 'src');
const HTML_FILE = path.join(DEV_DIR, 'index.html');


(function initWebpack() {
  const webpack = require('webpack');
  const webpackDevConfig = require('./webpack.dev');
  const compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackDevConfig.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
})();


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

app.listen(DEFAULT_PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", DEFAULT_PORT, DEFAULT_PORT)
  }
});
