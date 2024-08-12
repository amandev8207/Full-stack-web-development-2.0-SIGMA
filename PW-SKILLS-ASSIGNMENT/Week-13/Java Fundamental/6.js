// You are developing a form validation system. Write a program that takes user information(such as name, email, age) and uses the typeof operator to check the data type of each input. Print appropriate messages like "Name should be a string," "Email should be a string," or "Age should be a number." if any field is not proper.

let name = "aman";
let email = "aman@gmail.com";
let age = 22;

if(typeof name !== "string"){
    console.log("Name Should Be A String");
}else if (typeof email !== "string"){
    console.log("Email Should Be A String");
}else if (typeof Number !== "number"){
    console.log("Number should be A string");
}else{
    console.log("All the fields are proper. ");
}

