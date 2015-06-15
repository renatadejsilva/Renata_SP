angular.module("theFrog").controller("theFrogCtrl", function ($scope) {
	$scope.title = "The Frog - Trails";

	var movements = [1, 2]; //step=1 jump=2
	$scope.distance = 0;
	$scope.trails = [];	
	$scope.trailsFormated = [];

	$scope.startMoving = function(_entryNumber) {
		$scope.distance = _entryNumber;

		$scope.trails = [];	
		$scope.trailsFormated = [];

		moveOn(0, "");
		formatResults();
		delete $scope.frog;
	};

	var moveOn = function (currentDistance, trail){

		if(currentDistance==$scope.distance) {
			$scope.trails.push(trail);
		}else if(currentDistance<$scope.distance){
			movements.forEach(function(movement) {
				moveOn(currentDistance+movement, trail+movement);
			});
		
		};
	};

	var formatResults = function (){
		$scope.trails.forEach(function(trail) {
			$scope.trailsFormated.push(trail.replace(/1/g, "step ").replace(/2/g, "jump ").trim().split(" ").join("-"));
		});
	};

});