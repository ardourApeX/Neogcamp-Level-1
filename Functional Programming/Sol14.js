const vowels = ["a", "e", "i", "o", "u"]
const words = ["cat", "boy", "fry", "try"]

function isThereAnyVowel(word) {
    for (let letter in vowels) {
        if (word.includes(vowels[letter])) {
            return true
        }
    }
    return false
}
console.log(words.filter(isThereAnyVowel))