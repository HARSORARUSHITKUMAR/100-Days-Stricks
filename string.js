function addPyToString(str) {
  if (str.startsWith("Py")) {
    return str;
  } else {
    return "Py" + str;
  }
}

// Example usage:
console.log(addPyToString("thon")); // Output: "Python"
console.log(addPyToString("Pycharm")); // Output: "Pycharm"
