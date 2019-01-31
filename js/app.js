/**
 *   Create Pig Latin Generator
 */
function englishToPig(word) {
  let firstLetter = '';
  firstLetter = word[0];
  let vowel = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];

  if (vowel.indexOf(firstLetter) === -1) {
    for (let i = 0; word.length; i++) {
      let vowelIndex = vowel.indexOf(word[i]);
      if (vowelIndex > -1) {
        let restOfWord = word.slice(i);
        let beginningOfWord = word.slice(0, i);
        return restOfWord + '-' + beginningOfWord + 'ay';
      }
    }
  } else {
    return word + '-ay';
  }
}
let result = englishToPig('eat');
console.log('result', result);
//for loop for entire word
