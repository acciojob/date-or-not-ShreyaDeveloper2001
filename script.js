var isDate = function (input) {
  //   write your code here
	 // Try parsing the input into a Date object
    const parsedDate = new Date(input);

    // Check if the parsedDate is a valid date and is not NaN
    return !isNaN(parsedDate) && parsedDate instanceof Date;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
