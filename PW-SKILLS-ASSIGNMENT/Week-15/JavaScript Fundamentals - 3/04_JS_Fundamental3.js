// Function to check if an object has a specified property
function hasProperty(obj, propertyName) {
    return obj.hasOwnProperty(propertyName);
  }
  
  const exampleObject1 = { name: "aman", age: 25 };
  console.log(hasProperty(exampleObject1, "age")); // true
  console.log(hasProperty(exampleObject1, "email")); // false
  