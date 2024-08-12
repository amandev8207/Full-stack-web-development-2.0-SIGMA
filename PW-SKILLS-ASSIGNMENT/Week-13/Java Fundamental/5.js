// You are building a shipping application. Write a program that takes the type of package ("standard", "express", or "overnight") and uses a switch statement to calculate and print the estimated delivery time based on the package type. For example, "standard" might take 3-5 days, "express" 1-2 days, and "overnight" would be delivered the next day.

let typeofpackege = "express";

switch (typeofpackege) {
    case "standard":
        console.log("your package delivered in 3-5 days");
        break;
    case "express":
        console.log("your package delivered in 1-2 days");
        break;
    case "overnight":
        console.log("your package delivered in tomorrow");
        break;
    default:
        console.log("invalid package");
        break;
}