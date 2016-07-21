var shli = angular.module('shoppingList', []);

shli.controller('ListCtrl', function ($scope) {
	
	$scope.items = [
	{text:'Chocolate', done:true},
	{text:'Potato',done:false},
	{text:'Banana',done:false},
	{text:'Water',done:true}];

	$scope.remain = function(){
		var count = 0;

		angular.forEach($scope.items, function (item) {
			count += item.done;
		});

		return $scope.items.length - count;
	};

	$scope.addItem = function () {
		$scope.items.push({text:$scope.textItem, done:false});

		$scope.textItem = '';
	};

});