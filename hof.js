// Higher order functions have two main characteristics
//1 . They take other functions as arguments
//2. They could return a function

function removeDuplicates(listOfWords) {
  //loop through words -- Array
  // add uniqie woerds to new array
}
function calculateInterest(amount, rate) {
  // return interest = rate/100 * amout
}

function contactPerson(userDetails, sendEmail, sendMessage) {
  // userDetails {name: Albert, phone: "072434", email: "albert@eldohub.co.ke", age: 39, isKenyan: true}
  // validate phone format
  // other tasks---   conditional statemts
  //sendEmail -  a function to be called woth email
  sendEmail(userDetails.email);
  //sendMEssage - a function to be called with phone number
  sendMessage(userDetails.phone)
}

function mailerFunction(email) {
  // sending email logic here
  console.log("Sending drafted email to: " + email);
}
function smsSender(phone) {
  // africastalking
  // sending messages logic here + api interaction
  console.log("Sending drafted SMS to: " + phone);
}

contactPerson(
  { name: "james", email: "james@gmail.com", phone: "092434" },
  mailerFunction,
  smsSender
);





// function validatePassword(password) {
//   // more than 8 characters , contains numbers
//   if (password.length < 8) {
//     console.log("Weak Password! Must contain more than 8 characters");
//     return "Not Allowed";
//   }
//   return function logNames() {
//     console.log("Albert");
//     console.log("Victor");
//     console.log("Davis");
//   };
// }

// validatePassword("hedtdugygygh")();




