var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Your code goes here
	//add friend
	var num = Math.floor(Math.random() * 100);
	newFriend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "https://loremflickr.com/400/400/people?random=" + num
	}
	console.log(newFriend);
	data.friends.push(newFriend);
	//render index.handlebars
	response.render('index', data);
}