var app = angular.module("scenarioService", []);

/**
 * Scenario Service Provider
 */
app.factory('$scenarioService', function($http, config) {

    return {

        list: function() {
            return $http.get(config.apiURL + "/scenarios");
        },
        retrieve: function(scenario_id) {
            return $http.get(config.apiURL + "/scenarios/" + scenario_id);
        }

    };

});
