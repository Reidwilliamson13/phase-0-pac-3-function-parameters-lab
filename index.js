let myMultiplier = function (num1, num2) {
  return num1 * num2;
};

console.log(myMultiplier(4, 5));

let guestUser = function (name = "unName", courseCount = 0) {
  return "Hello " + name + " and your course count is " + courseCount;
};

console.log(guestUser("John"));
// actual lab

function introduction(name) {
  return `Hi, my name is ${name}.`;
}
console.log(introduction("Jesse"));

//

function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Reid", "JavaScript"));
//

function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Reid", "Java"));
//

function introductionWithLanguageOptional(
  name = "Ralph",
  language = "JavaScript"
) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Reid", "JavaScript"));
