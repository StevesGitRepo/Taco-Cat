//Get the user input
const getValue = () => {
  //hide the alert
  document.getElementById('alert').classList.add('invisible');
  //get userString from the page
  let userString = document.getElementById('userString').value;

  //check for palindrome
  let returnObj = checkForPalindrome(userString);

  //display out message to the screen
  displayMessage(returnObj);
};
//check if string is a palindrome
const checkForPalindrome = (userString) => {
  //transform all upper case letters to lowercase
  userString = userString.toLowerCase();

  //remove spaces and special characters
  let regex = /[^a-z0-9]/gi;
  userString = userString.replace(regex, '');

  let revString = [];
  let returnObj = {};

  for (let index = userString.length - 1; index >= 0; index--) {
    revString += userString[index];
  }

  if (revString == userString) {
    returnObj.msg = 'Well done! You entered a palindrome!';
  } else {
    returnObj.msg = 'Sorry! You did not enter a palindrome.';
  }

  if (revString == 'tenet') {
    returnObj.msg = '"Tenet" was filmed as a palindrome!';
  }

  if (revString == 'lol') {
    returnObj.msg = 'Hah hah! You entered a palindrome!';
  }

  returnObj.reversed = revString;

  return returnObj;
};

//Display the message back to the user
const displayMessage = (returnObj) => {
  //write to the page
  document.getElementById('alertHeader').innerHTML = returnObj.msg;
  document.getElementById(
    'msg'
  ).innerHTML = `Your phrase reversed is: ${returnObj.reversed}`;
  //show the alert box
  document.getElementById('alert').classList.remove('invisible');
};
