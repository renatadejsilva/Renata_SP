angular.module("theGame").controller("theGameCtrl", function ($scope) {
	$scope.title = "The Game";
	$scope.resultMsg = "";
	$scope.userChoice = "";

	$scope.weapons = [
		{id: 1, name: "Rock", betterThan: 3},
		{id: 2, name: "Paper", betterThan: 1},
		{id: 3, name: "Scissors", betterThan: 2}
	];

	var weaponsToShuffle = $scope.weapons.filter(function(element) {
		return element;
	});


	$scope.startTheGame = function(userWeapon) {
		$scope.userChoice = userWeapon.name;
		$scope.computerWeapon = weaponsToShuffle.sort(function(){return 0.5 - Math.random()})[0];
		if (userWeapon.id === $scope.computerWeapon.id) {
			$scope.resultMsg = "It's a tie!";
		} else if (userWeapon.betterThan === $scope.computerWeapon.id) {
			$scope.resultMsg = "You win!";
		} else {
			$scope.resultMsg = "You lose!";
		};
		delete $scope.weapon;
	};

});