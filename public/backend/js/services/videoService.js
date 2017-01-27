var app = angular.module("videoService", []);

/**
 * Video Service Provider
 */
app.factory('$videoService', function($http, config) {

    return {

        list: function() {
            return $http.get(config.apiURL + "/videos");
        },
        list_by_scenario: function(scenario_id) {
            return $http.get(config.apiURL + "/scenarios/" + scenario_id + "/videos");
        },
        list_by_location: function(location_id) {
            return $http.get(config.apiURL + "/locations/" + location_id + "/videos");
        },
        retrieve: function(video_id) {
            return $http.get(config.apiURL + "/videos/" + video_id);
        },
        create: function() {
            return $http.post(config.apiURL + "/videos");
        },
        edit: function(video_id) {
            return $http.put(config.apiURL + "/videos/" + video_id);
        },
        delete: function(video_id) {
            return $http.delete(config.apiURL + "/videos/" + video_id);
        }

    };

});
