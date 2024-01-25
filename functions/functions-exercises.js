function reverse(str) {
    let lettersArray = str.split('');
    let reversedLettersArray = lettersArray.reverse();
    return reversedLettersArray.join('');
}
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
          line += "#"
    }
    return line ;
}
// console.log(makeLine(5));
function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
          square += makeLine(size) + '\n'
    }
    return square ;
}
// console.log(makeSquare(5));
function makeRectangle(width, height) {
    let line = '';
    for (let i = 0; i < width; i++) {
          line += "#"
    }
    let rectangle = '';
    for (let i = 0; i < height; i++) {
          rectangle += line + '\n'
    }
    return rectangle.slice(0,-1) ;
}
// console.log(makeRectangle(5, 3));
function makeDownwardStairs(height) {
    let donwStairs =''
    for (let i = 1; i <= height; i++) {
        donwStairs += makeLine(i) + "\n";
    }
    return  donwStairs.slice(0,-1);
}
// console.log(makeDownwardStairs(5));
function makeSpaceLine(numSpaces, numChars,newChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
          line += " ";
    }
    for (let i = 0; i < numChars; i++) {
        line += newChars;
  }
  for (let i = 0; i < numSpaces; i++) {
    line += " ";
}
    return line ;
}
// console.log(makeSpaceLine(3, 5));
function makeIsoscelesTriangle(height,newChars) {
    let isoscelesTriangle = "" ;
    for (let i = 0; i < height; i++) {
        isoscelesTriangle += makeSpaceLine(height - i - 1, 2 * i + 1,newChars) + "\n";
    }
    return  isoscelesTriangle.slice(0,-1);
}
// console.log(makeIsoscelesTriangle(5));
function makeDiamond(height,newChars) {
    let diamond = "";
    for (let i = 0; i < height; i++) {
            diamond += makeSpaceLine(height - i - 1, 2 * i + 1,newChars) + "\n";
    }
    return  diamond.slice(0,-1);
}
console.log(makeDiamond(5,7));
console.log(reverse(makeDiamond(5,7)));