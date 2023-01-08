//Get the string from the page
//controller function
const getValue = () => {
  document.getElementById('alert').classList.add('invisible');
  let userString = document.getElementById('userString').value;
  let palindrome = reverseString(userString);
  displayString(palindrome);
};

//Reverse the string
//logic function
const reverseString = (userString) => {
  let palindrome = [];

  //reverse a string using a decrementing for loop
  for (let index = userString.length - 1; index >= 0; index--) {
    palindrome += userString[index];
  }

  // if (palindrome === )

  return palindrome;
};

//Display the message back to the user
//View function
const displayString = (palindrome) => {
  //write to the page
  document.getElementById(
    'msg'
  ).innerHTML = `Your reversed string is: ${palindrome}`;
  //show the alert box
  document.getElementById('alert').classList.remove('invisible');
};
