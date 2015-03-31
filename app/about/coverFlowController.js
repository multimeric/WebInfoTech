/** AngularJS powered Cover Flow with CSS3
 *
 * Created by: Jake Moxey
 *
 */


(function() {
    function coverFlowController($scope) {
        var index;

        function listenToKeystrokes() {
            var e;
            $(document).keydown(function(e) {
                if (e.which === 37) {
                    goLeft();
                } else if (e.which === 39) {
                    goRight();
                }
                $scope.$apply();
            });
        }

        function init() {
            $scope.colors = ['#cc0000', '#0000cc', '#00ccc0', '#00cc00', '#00e0e0', '#ccc000', '#ff00ff', '#00ff00'];
            $scope.index = parseInt($scope.colors.length / 2);

            listenToKeystrokes();
        }

        init();

        function getNonFocussedElementStyle(loc, i, multiplier) {
            return "background-color:" + $scope.colors[i] + "; transform: translateX(" + String(-70 * multiplier) + "%) rotateY(" + String(-loc * 45) +"deg); -webkit-transform: translateX(" + String(-70 * multiplier) + "%) rotateY(" + String(-loc * 45) +"deg); z-index: " + String(loc * multiplier) + "; opacity: " + String(1 - (-0.1 * loc * multiplier)) + ";";
        }

        function getFocussedElementStyle(i) {
            return "background-color:" + $scope.colors[i] + "; transform: translateZ(150px); -webkit-transform: translateZ(150px)";
        }

        function goLeft() {
            if($scope.index !== 0) {
                $scope.index--;
            }
        }

        function goRight() {
            if($scope.index !== $scope.colors.length - 1) {
                $scope.index++;
            }
        }

        $scope.changeIndex = function(i) {
            $scope.index = i;
            $scope.$apply();
        };

        $scope.loadElementStyle = function(i, index) {
            var multiplier = index - i;

            if(i < index) {
                return getNonFocussedElementStyle(-1, i, multiplier);
            } else if (i === index) {
                return getFocussedElementStyle(i);
            } else {
                return getNonFocussedElementStyle(1, i, multiplier);
            }
        };

    }

    angular.
        module("app").
        controller("coverFlowController", ['$scope',
            coverFlowController]);

})();