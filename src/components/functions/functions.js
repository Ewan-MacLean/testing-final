
function popup() {
    alert('OOOIIIIInkkkkkk')
}

function reverseString(str) {
    console.log('reverseString on: ' + str)
    const arr = str.split('')
    // console.log(arr)
    const revArr = arr.reverse()
    // console.log(revArr)
    console.log(revArr.join(''))

}

// try and write this with the map method
function countVowels(str) {
    const vowels = ['a','e','i','o','u']
    let numVowels = 0
    const strArr = str.split('')
    for (let p=0;p<strArr.length; p++) {
        for (let i=0;i<vowels.length;i++) {
            if (strArr[p] == vowels[i]) {
                numVowels = numVowels + 1
            }
        }
    }
    console.log('there are ' + numVowels + ' vowels in the string: ' + str)
}

function toRomanNumeral(num) {
    const index = {
        I :1,
        II :2,
        III :3,
        IV :4,
        V :5,
        VI :6,
        VII :7,
        VIII :8,
        IX : 9,
        X : 10
    }

    for (key in index) {
        result += key.repeat(Math.floor(num / index[key]));
        num %= index[key];
      }

    let result = ''

    console.log(result)
}

function returnRandomString() {
    
}

function uppercaseAll() {
    
}

function uppercaseSome() {
    
}

function addDomElement(){
    
}

function delDomElement(){
    
}

function animation() {
}

function changeBackgroundColor() {

}

function flipText() {

}

export {
    popup,
    reverseString,
    countVowels,
    toRomanNumeral
    // returnRandomString,
    // uppercaseAll,
    // uppercaseSome,
    // addDomElement,
    // delDomElement, 
    // animation,
    // changeBackgroundColor,
    // flipText
}



