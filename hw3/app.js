const express = require('express');
const app = express();

app.use(express.static("."));
app.listen(8080,() => {
	console.log("server started on 8080");
});

app.get('/sum', function(req, res){
	var sum = 0;
	for(var i = 0; i <= parseInt(req.query.n); i++){
		sum += i
	}
	res.send(
		sum.toString()
	);
	res.end();	
});

app.get('/fact', function(req, res){
	var sum = 1;
	for(var i = parseInt(req.query.n); i >= 1; i--){
		sum *= i
	}
	res.send(
		sum.toString()
	);
	res.end();	
});

