const express = require('express');

const INTERNAL_STATIC_PATH = '___webpack-dev-server-fallback___';
const INTERNAL_STATIC_PATH_REGEXP = new RegExp(`^/${INTERNAL_STATIC_PATH}`);

module.exports = function({directory, wait} = {}) {
  directory = directory || 'fallback';
  wait = !wait && wait !== 0 ? 300 : wait;

  return function(app, server) {
    const isReady = () => new Promise((resolve) => {
      server.middleware.waitUntilValid(() => resolve(true));
      setTimeout(() => resolve(false), wait);
    });

    app.get('*', async(req, res, next) => {
      if (!INTERNAL_STATIC_PATH_REGEXP.test(req.url)) {
        const ready = await isReady();

        if (!ready) {
          req.url = `/${INTERNAL_STATIC_PATH}${req.url}`;
        }
      }

      next();
    });

    app.use(`/${INTERNAL_STATIC_PATH}`, express.static(directory));
  };
};
