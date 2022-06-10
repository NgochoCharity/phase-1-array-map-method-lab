const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
let name = [];
let array = []

const titleCased = () => {
  tutorials.forEach(tutorial => {
    name.push(tutorial.split(" "))
  })
  
  for(let line of name){
    for(let i = 0; i < line.length; i++){
      line[i] = line[i].charAt(0).toUpperCase() + line[i].slice(1);
    }
    array.push(line.join(" "))
  }

  return array;
}