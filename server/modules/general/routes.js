"use strict"

/**
 * modules/general/routes.js
 * 
 * @description All routes with "/api/images" come through here.
 */

const router = require("express").Router;

/**
 * @description Serve any static files
 */
router.use(express.static(path.join(__dirname, '../../client/build')));

/**
 * @description Handle React routing, return all requests to React app 
 */
router.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

/**
 * @description The "catchall" handler: for any request that doesn't match one above, 
 * send back React's index.html file.
 */
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;