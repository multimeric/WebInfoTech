/**
 *
 * This function obtains all username and score data from the JSON endpoint,
 * which is found at /api/leaderboard/world
 *
 */

(function() {
    "use strict";

    function leaderboardService($http) {
        return {
            getWorldLeaderboard: function(callback) {
                $http
                    .get("/api/leaderboard/world")
                    .success(function(data) {
                        callback(data.leaderboard)
                    })
                    .error(function() {
                        console.error("error: unable to GET /leaderboard/world");
                    });
            },

        }
    }

    angular
        .module("app")
        .factory("leaderboardService", ["$http", leaderboardService]);
})();