
function popup() {
    alert('WELCOME!!!')
}

function duplicateString(str) {
    let strArr = str.split(' ')
    let newArr = []
    for (let i=0;i<strArr.length;i++) {
        newArr.push(strArr[i])
    }
    strArr.push(newArr.join(' '))
    console.log(strArr.join(' '))
}

function reverseString(str) {
    console.log('reverseString on: ' + str)
    const arr = str.split('')
    // console.log(arr)
    const revArr = arr.reverse()
    // console.log(revArr)
    console.log('result: ' + (revArr.join('')))

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

function returnRandomString() {
    const alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const numbers = [1,2,3,4,5,6,7,8,9,0]
    
    const randomStrArr = []
    for (let i=0;i<20;i++) {
        let randomNumABC = Math.floor(Math.random() * 25)
        let randomNum123 = Math.floor(Math.random() * 9)
        let letterOrNum = (Math.random() < 0.5)
        if (letterOrNum === true) {
            randomStrArr.push(alphabet[randomNumABC])
        }
        else {
            randomStrArr.push(numbers[randomNum123])
        }
    }
    console.log(randomStrArr.join(''))
}

function uppercaseAll(str) {
    const myString = str.toUpperCase()
    console.log(str)
    console.log(myString)
}

function uppercaseSome(str) {
    console.log(str)
    const strArr = str.split('')
    const newStr = []
    for (let i=0;i<strArr.length;i++) {
        let x = (Math.floor(Math.random() * 2) == 0);
        if(x){
               newStr.push(strArr[i].toUpperCase())
            }   
        else {
            newStr.push(strArr[i])
        }
    }
    console.log(newStr.join(''))

}


function addDomElement() {

        document.addEventListener("DOMContentLoaded", function(event) {
            // console.log("DOM fully loaded and parsed");
            const newElement = document.createElement('p')
            const mainElement = (document.getElementById('main'))
            newElement.innerText = 'im new here! (first)'
            mainElement.appendChild(newElement)
        
    });
}

function squareNumber(num) {
    console.log(num * num)
}
 
function changeBackgroundColor() {
    console.log('changing background color....')
    const body = document.querySelector('#body')
    const colors = ["red","yellow","white","slateblue","green"]
    body.style["background-color"] = colors[Math.floor(Math.random() * 4)]
}



export {
    duplicateString,
    popup,
    reverseString,
    countVowels,
    returnRandomString,
    uppercaseAll,
    uppercaseSome,
    addDomElement,
    squareNumber,
    changeBackgroundColor
}



