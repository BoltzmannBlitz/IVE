var express = require('express');
var router = express.Router();
var isAuthenticated = require('../server.js').isAuthenticated;

var list = require('../controllers/videos/list');
var post = require('../controllers/videos/post');
var del_all = require('../controllers/videos/delete_all');

var get = require('../controllers/videos/get');
var put = require('../controllers/videos/put');
var del = require('../controllers/videos/delete');

var list_by_scenario = require('../controllers/videos/list_by_scenario');
var list_by_location = require('../controllers/videos/list_by_location');



// LIST
router.get('/videos', list.request);

// POST
router.post('/videos', isAuthenticated, post.request);

// DELETE
router.delete('/videos', isAuthenticated, del_all.request);


// GET
router.get('/videos/:video_id', get.request);

// PUT
router.put('/videos/:video_id', isAuthenticated, put.request);

// DELETE
router.delete('/videos/:video_id', isAuthenticated, del.request);


// LIST BY SCENARIO
router.get('/scenarios/:scenario_id/videos', list_by_scenario.request);

// LIST BY LOCATION
router.get('/locations/:location_id/videos', list_by_location.request);


module.exports = router;
