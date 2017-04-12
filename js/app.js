(function (angular) {
	'use strict';

	// Your starting point. Enjoy the ride!
	angular
	 .module('todo',[])
	 .controller("TodoController",["$scope", function ($scope) {
			$scope.list = [
				{id: 1, name: '抽烟1', isCompleted: false},
				{id: 2, name: '喝酒2', isCompleted: true},
				{id: 3, name: '烫头发3', isCompleted: false}
			];
		}])
})(angular);
