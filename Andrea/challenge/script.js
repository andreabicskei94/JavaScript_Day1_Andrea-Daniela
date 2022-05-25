let text = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";
let newText = text.replaceAll("$", " ");
console.log(newText);

const array = ['Thomas', 'Sarah', 'Eva', 'Tobias', 'Peter'];

console.log(array);

const index = array.indexOf('Eva');
if (index > -1) {
    array.splice(index, 1);

}
console.log(array);


const str = 'i am a web developer';
const str2 = str.charAt(0).toUpperCase() + str.slice(1);
console.log(str2);

const numbers = [222, 36, 2, 66, 89, 19];

numbers.sort(function(a, b) { return a - b });

let highest = numbers[numbers.length - 1];
console.log(numbers);



var fname = prompt("type your name")

console.log(fname)

var status = prompt("Hello " + fname + ", do u want to log in as an admin or user?");

var status1 = 'admin'
var status2 = 'user'
if (status == "admin") {

    alert("You're logged in as an admin ")
} else if (status == "user") {
    alert("You're logged in as a user ")
} else {
    alert("Please give a right value in")
}