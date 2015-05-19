// Add your code below this line!

var xhr = new XMLHttpRequest();

//false parameter makes program synchronous
xhr.open("GET", "https://www.codecademy.com");
xhr.send();


// Add your code above this line!

console.log(xhr.status);
console.log(xhr.statusText);