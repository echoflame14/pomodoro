angular.module("app").controller("ctrl",function($scope, $timeout, srvc){
	$scope.min = 25; // setting the initial minute count
	$scope.sec = "00"; // setting the initial second count to "00" to display properly
	var running = false; // setting the initial state of running to be false
	$scope.action = "START"; // text for the action button
	var timer = function(){ // func will do the countdown
		if($scope.min === 0 && $scope.sec === 1){ // checking for the timer to be done to stop the $timeout func
			$scope.min = "00";
			$scope.sec = "00";
			alert("CONGRATS you finished a 25 min block")
		}
		else if($scope.sec === 1 && $scope.min !== 0){ // decrements the min and starts the timer func again
			$scope.min--;
			$scope.sec = 60;
			$timeout(timer,1000);
		}
		else if(running){ // if running is true countdown the sec and start the func again using $timeout
			$scope.sec--;
			$timeout(timer,1000);
		}
	}
	$(".startBtn").click(function(){ // logic for the action button press
		if(!running){ // if not counting down then start the timer
			$timeout(timer,500);
			if($scope.savedMin && $scope.savedSec){ // setting the min and sec using the saved val's from when it was paused
				$scope.min = $scope.savedMin;
				$scope.sec = $scope.savedSec;
			}else{ // if it was not paused then set the min and sec val's to default
				$scope.sec = 60;
				$scope.min = 24;
			}
			$scope.action = "PAUSE"; // setting the text to pause
			running = true; // running set to true
		}
		else{ // if the timer is counting down then this will run (saving the values of min an sec to be used when the timer is started again)
			$scope.savedMin = $scope.min;
			$scope.savedSec = $scope.sec;
			running = false;
			$scope.action = "START"; // changing the text for the action button
		}
	});
});
