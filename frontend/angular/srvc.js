angular.module("app").service("srvc", function($http){

	this.timer = function(min,sec){
		console.log(min,":",sec);
		var min = min;
		var sec = sec;
		if(sec === 1){
			sec = 60;
			min = min -1;
		}
		else{
			sec--;
		}
		return [min,sec];
	}
});


// Sudo code for the timer function
// needs a countdown function to assign this.sec every time it runs
// it should only run every 1 sec

// sec passed in as 0
// min passed in as 25

// setTimeout(function(){ alert("Hello"); }, 3000);

//need to set the timer to end if min and sec are both 0
//else setTimeout needs to run again
