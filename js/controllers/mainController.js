// MAIN CONTROLLER
"use struct"
angular.module("app").controller("mainController", ["$scope", function mainController($scope) {
	this.add = () => {
		console.log("bouh");
	}

	this.users = [];
  this.user = {lastname: "", firstname: "", eMail: ""};

	this.add = () => {
    if (this.user.lastname){
      this.users.push(this.user);	
      this.reset();
    } else {
      alert("Lastname can't be empty")
    }
  }

  this.reset = () => {
    this.user = {lastname: "", firstname: "", eMail: ""};
  }
}]);