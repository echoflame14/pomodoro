angular.module("app").controller("ctrl",function($scope, $timeout, srvc){
	$scope.test = srvc.test;
	$scope.min = 25;
	$scope.sec = "00";
	var running = false;
	$scope.action = "START";
	var timer = function(){
		console.log(running);
		if($scope.min === 0 && $scope.sec === 1){
			$scope.min = "00";
			$scope.sec = "00" ;
		}
		else if($scope.sec === 1 && $scope.min !== 0){
			$scope.min--;
			$scope.sec = 60;
			$timeout(timer,1000);
		}
		else if(running === true){
			$scope.sec--;
			$timeout(timer,1000);
		}
	}
	$(".startBtn").click(function(){
		if(!running){
			$timeout(timer,500);
			if($scope.savedMin && $scope.savedSec){
				$scope.min = $scope.savedMin;
				$scope.sec = $scope.savedSec;
			}else{
				$scope.sec = 60;
				$scope.min = 24;
			}
			$scope.action = "PAUSE";
			running = true;
			console.log(running);
		}
		else{
			$scope.savedMin = $scope.min;
			$scope.savedSec = $scope.sec;
			running = false;
			$scope.action = "START";
			console.log(running);
		}
	});
});
