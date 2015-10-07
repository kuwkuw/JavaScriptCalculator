var calc = angular.module('calc', []);

calc.controller('calcController', ['$scope', function($scope){
	$scope.resulte='';

	var newOperand = true; 

	var res=0;

	var op1 = 0;

	var op2 = 0;

	var operation;


	$scope.reset = function(){
		$scope.resulte='';
		newOperand = true; 
		res=0;
		operation = '';
	}

	$scope.calc = function(){
		switch(operation){
			case '-':
				res -= parseInt($scope.resulte);
				$scope.resulte = res;

			break;
			case '+':
				res += parseInt($scope.resulte);
				$scope.resulte = res;
			break;
			case '/':
				res = res/parseInt($scope.resulte);
				$scope.resulte = res;
			break;
			case '*':
				res = res*parseInt($scope.resulte);
				$scope.resulte = res;
			break;

		}
		newOperand = true; 
		res=0;
		console.log(res);
	}


	$scope.getDigit = function(digit){
		console.log(digit);
		if(newOperand){
			$scope.resulte='';
			newOperand = false;
		}

		$scope.resulte += digit;
	};


	$scope.subtract = function(){
		newOperand = true; 
		if(!res){
			res = parseInt($scope.resulte);
		}else{
			res -= parseInt($scope.resulte);
		}
		operation='-';
		console.log(res);
	};

	$scope.add = function(){
		newOperand = true; 
		if(!res){
			res = parseInt($scope.resulte);
		}else{
			res += parseInt($scope.resulte);
		}
		operation='+';
		console.log(res);
	}

	$scope.divide = function(){
		newOperand = true; 
		if(!res){
			res = parseInt($scope.resulte);
		}else{
			res = res/parseInt($scope.resulte);
		}
		operation='/';
		console.log(res);
	}

	$scope.multiply = function(){
		newOperand = true; 
		if(!res){
			res = parseInt($scope.resulte);
		}else{
			res = res*parseInt($scope.resulte);
		}
		operation='*';
		console.log(res);
	}

	$scope.operation = function(op){
		newOperand = true; 
		if(!res){
			res = parseInt($scope.resulte);
		}else{
			switch(op){
				case '-':
					res -= parseInt($scope.resulte);
				break;
				case '+':
					res += parseInt($scope.resulte);					
				break;
				case '/':
					res = res/parseInt($scope.resulte);					
				break;
				case '*':
					res = res*parseInt($scope.resulte);				
				break;
			}		
		}
		operation=op;
		console.log(res);
	}

}])