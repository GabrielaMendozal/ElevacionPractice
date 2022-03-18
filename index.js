// GIVEN
//console.log(example);
//let example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
let example;
console.log(example);
example = "I'm the example!";

console.log(hello);                                   
var hello = 'world';                                 
//AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

let needle = 'haystack'; 
test();                     
function test(){            
    let needle = 'magnet';
    console.log(needle);
}
//AFTER HOISTING BY THE INTERPRETER
//let needle = 'haystack'; 
//function test(){            
//let needle = 'magnet';
//console.log(needle);
//}
// test();  //logs magnet

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//AFTER HOISTING BY THE INTERPRETER
//var brendan = 'super cool';
//function print(){
//    brendan = 'only okay';
//    console.log(brendan);
//}
//console.log(brendan); logs super cool

var food = 'chicken';
console.log(food);  //log food
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//AFTER HOISTING BY THE INTERPRETER
//var food = 'chicken';
//console.log(food);  //log food
//function eat(){
    //food = 'half-chicken';
    //console.log(food);
    //var food = 'gone';
//}
//eat(); logs half-chicken

mean();
console.log(food);
var mean;
function mean() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
//AFTER HOISTING BY THE INTERPRETER
//var mean;
//function mean() {
    //food = "chicken";
    //console.log(food);
    //var food = "fish";
    //console.log(food);
//}
//mean();  logs chicken fish
//console.log(food); chicken
//console.log(food); chicken

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//AFTER HOISTING BY THE INTERPRETER
//console.log(genre);     undefined
//var genre = "disco";
//function rewind() {
    //genre = "rock";
    //console.log(genre);
    //var genre = "r&b";
    //console.log(genre);
//}
//rewind();  logs rock r&b
//console.log(genre);   log  disco

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
//AFTER HOISTING BY THE INTERPRETER
//dojo = "san jose";
//console.log(dojo);  logs san jose
//function learn() {
    //dojo = "seattle";
    //console.log(dojo);
    //var dojo = "burbank";
    //console.log(dojo);
//}
//learn();     logs seattle  burbank
//console.log(dojo);  logs san jose


console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo.console = "closed for now";
    }
    return dojo;
}
//AFTER HOISTING BY THE INTERPRETER
//function makeDojo(name, students){
    //const dojo = {};
    //dojo.name = name;
    //dojo.students = students;
    //if(dojo.students > 50){
    //    dojo.hiring = true;
    //}
    //else if(dojo.students <= 0){
    //    dojo.console = "closed for now";
    //}
    //return dojo;
//}
//console.log(makeDojo("Chicago", 65));
//console.log(makeDojo("Berkeley", 0));