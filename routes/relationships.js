var express = require('express');
var router = express.Router();
var isAuthenticated = require('../server.js').isAuthenticated;

var list_belongs_to = require('../controllers/relationships/list/belongs_to');
var list_connected_to = require('../controllers/relationships/list/connected_to');
var list_embedded_in = require('../controllers/relationships/list/embedded_in');
var list_has_parent_location = require('../controllers/relationships/list/has_parent_location');
var list_recorded_at = require('../controllers/relationships/list/recorded_at');

var post_belongs_to = require('../controllers/relationships/post/belongs_to');
var post_connected_to = require('../controllers/relationships/post/connected_to');
var post_embedded_in = require('../controllers/relationships/post/embedded_in');
var post_has_parent_location = require('../controllers/relationships/post/has_parent_location');
var post_recorded_at = require('../controllers/relationships/post/recorded_at');

var get_belongs_to = require('../controllers/relationships/get/belongs_to');
var get_connected_to = require('../controllers/relationships/get/connected_to');
var get_embedded_in = require('../controllers/relationships/get/embedded_in');
var get_has_parent_location = require('../controllers/relationships/get/has_parent_location');
var get_recorded_at = require('../controllers/relationships/get/recorded_at');

var edit_belongs_to = require('../controllers/relationships/put/belongs_to');
var edit_connected_to = require('../controllers/relationships/put/connected_to');
var edit_embedded_in = require('../controllers/relationships/put/embedded_in');
var edit_has_parent_location = require('../controllers/relationships/put/has_parent_location');
var edit_recorded_at = require('../controllers/relationships/put/recorded_at');

var del = require('../controllers/relationships/delete');



// LIST BY RELATIONSHIP-TYPE
router.get('/relationship/belongs_to/:label', list_belongs_to.request);
router.get('/relationship/connected_to', list_connected_to.request);
router.get('/relationship/embedded_in', list_embedded_in.request);
router.get('/relationship/has_parent_location', list_has_parent_location.request);
router.get('/relationship/recorded_at', list_recorded_at.request);

// POST BY RELATIONSHIP-TYPE
router.post('/relationship/belongs_to/:label', isAuthenticated, post_belongs_to.request);
router.post('/relationship/connected_to', isAuthenticated, post_connected_to.request);
router.post('/relationship/embedded_in', isAuthenticated, post_embedded_in.request);
router.post('/relationship/has_parent_location', isAuthenticated, post_has_parent_location.request);
router.post('/relationship/recorded_at', isAuthenticated, post_recorded_at.request);

// GET BY ID
router.get('/relationship/belongs_to/:relationship_id/:label', get_belongs_to.request);
router.get('/relationship/connected_to/:relationship_id', get_connected_to.request);
router.get('/relationship/embedded_in/:relationship_id', get_embedded_in.request);
router.get('/relationship/has_parent_location/:relationship_id', get_has_parent_location.request);
router.get('/relationship/recorded_at/:relationship_id', get_recorded_at.request);

// EDIT BY ID
router.put('/relationship/belongs_to/:relationship_id/:label', isAuthenticated, edit_belongs_to.request);
router.put('/relationship/connected_to/:relationship_id', isAuthenticated, edit_connected_to.request);
router.put('/relationship/embedded_in/:relationship_id', isAuthenticated, edit_embedded_in.request);
router.put('/relationship/has_parent_location/:relationship_id', isAuthenticated, edit_has_parent_location.request);
router.put('/relationship/recorded_at/:relationship_id', isAuthenticated, edit_recorded_at.request);

// DELETE
router.delete('/relationships/:relationship_id', isAuthenticated, del.request);


module.exports = router;
