// Exercise 1 Create a one line function (ie. an arrow function) that receives two numbers as parameters 
// and returns the sum.
const calcSum = (x, y) => x + y;

console.log(calcSum(1,5));

// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)


let convKilo = (kilograms) => kilograms * 1000;

console.log(convKilo(1));

// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
let noChildren, partnername, geoloca, jobtitle;
(function fortuneTeller (noChildren, partnername, geoloca, jobtitle) {
	noChildren = prompt("Please enter number of children");
	partnername = prompt("Please enter name of partner");
	geoloca = prompt("Please enter your location");
	jobtitle = prompt("Please enter your job title");
	console.log(`You will be a ${jobtitle.toString()} in ${geoloca.toString()}, and married to ${partnername.toString()} with ${noChildren.toString()} kids.`);
  })();

// Exercise 4
//John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
let username = document.getElementById('username');
(function takeName(name) {
    name = prompt("Enter your name");
    username.innerHTML = name.toString();
})();