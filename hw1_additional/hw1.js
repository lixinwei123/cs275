/* THE FUNCTION THAT CATCHES ERROR, DISPLAYS RESULT OF A COMPUTATION, AND THE TABLE*/
function displayFib(){
	var fibVal = document.getElementById("fib-num").value; 
	var fibNum = parseInt(fibVal);
	if (fibVal.length <= 0){
		document.getElementById("fib-result").innerHTML = "input box cannot be empty";
		return;
	}
	else if (isNaN(fibNum)){
		document.getElementById("fib-result").innerHTML = "Invalid input";
		return;
	}
	else if(fibNum < 1){
		document.getElementById("fib-result").innerHTML = "Cannot compute Fib of a negative integer";
		return;
	}
	fibNum --; //DECREMENT 1 BECAUSE STARTING AT 0
	    document.getElementById("fib-result").innerHTML = "The fibonacci number is " + calculateFib(fibNum);
	    generateTable(fibNum);
}
/* A SIMPLE ITERATIVE WAY TO SOLVE FIBONNACI SEQUENCE*/
function calculateFib(num){
	var a = 1, b = 0, temp;
	while (num > 0 ){
		temp = a;
		a = a + b;
		b = temp;
		num --;
	}
	return b
}
/* GENERAL THE TABLES FOR DIFFERENT COMPUTATION */
function generateTable(num){
	num ++;
	var fibTable = '<table><tr><th class = "left-column left-th">n</th><th class = "right-column right-th">fib(n)</th></tr>';
	for(i = 0; i < num; i++){
		fibTable += '<tr><td class = "left-column">' + i + '</td><td class = "right-column" >' + calculateFib(i) + "</td> </td>";
	}
	fibTable += "</table>";
	document.getElementById("fib-table").innerHTML = fibTable
}