var colors = require('colors');
var async = require('async');
var neo4j = require('neo4j-driver').v1;
var _ = require('underscore');
var moment = require('moment');
var driver = require('../../server.js').driver;


// LIST BY SCENARIO
exports.request = function(req, res) {

    var session = driver.session();
    var query = "MATCH (v:Videos)-[r:recorded_at]->(l:Locations) " +
        "WHERE ID(l)= toInt({location_id}) " +
        "RETURN " +
            "ID(v) AS video_id, " +
            "v.created AS created, " +
            "v.updated AS updated, " +
            "v.v_id AS v_id, " +
            "v.name AS name, " +
            "v.description AS description, " +
            "v.url AS url, " +
            "v.recorded AS recorded " +
        "ORDER BY v.name DESC;";

        session
            .run(query, {
                location_id: req.params.location_id
            })
            .then(function(result) {
                session.close();
                var results = [];

                async.forEachOf(result.records, function (record, item, callback) {
                    var object = {};

                    async.forEachOf(record.keys, function (key, item, callback) {

                        if(typeof(record._fields[item]) === 'object'){
                            if(key === 'id') {
                               object[key] = Number(record._fields[item].low);
                            } else if (record._fields[item] === null){
                                object[key] = record._fields[item];
                            } else {
                               object[key] = Number(record._fields[item]);
                            }
                        } else {
                            object[key] = record._fields[item];
                        }
                        callback();
                    }, function(){
                        results.push(object);
                        callback();
                    });

                }, function (err) {
                    if (err) {
                        console.log(colors.red(err));
                        res.status(500).send(err);
                    } else {
                        // Send Result
                        res.status(200).send(results);
                    }
                });

            })
            .catch(function(err) {
                console.log(colors.red(err));
                res.status(500).send(err);
            });

};