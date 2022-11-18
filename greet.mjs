// callback excercies 13.1
function greet(fullText) {
  console.log(`salam ${fullText[0] + " " + fullText[1]}`);
}
function secondFucntion(useName, callback) {
  const name = useName.split(" ");
  callback(name);
}
secondFucntion("shan ali", greet);
