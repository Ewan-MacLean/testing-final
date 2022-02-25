
function duplicateString(str) {
    if (str.length < 1 || typeof str !== 'string')
    {
        return null
    }
    else {

        let strArr = str.split(' ')
        let newArr = []
        for (let i=0;i<strArr.length;i++) {
            newArr.push(strArr[i])
        }
        strArr.push(newArr.join(' '))
        console.log(strArr.join(' '))
        
        
        return (strArr.join(' ')) 
    }
}

function reverseString(str) {
    // console.log('reverseString on: ' + str)
    if (str.length < 1 || typeof str !== 'string')
    {
        return null
    }
    else {
    const arr = str.split('')
    // console.log(arr)
    const revArr = arr.reverse()
    // console.log(revArr)
    return(revArr.join(''))
    }
}

// try and write this with the map method
function countVowels(str) {
    if (str.length < 1 || typeof str !== 'string')
    {
        return null
    }
    else {
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
        return numVowels
    }
    // console.log('there are ' + numVowels + ' vowels in the string: ' + str)
    
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
    return(randomStrArr.join(''))
}

function uppercaseAll(str) {
    if (str.length < 1 || typeof str !== 'string')
    {
        return null
    }
    else {
        const myString = str.toUpperCase()
        console.log(str)
        console.log(myString)
        return myString
    }
}

function uppercaseSome(str) {
    if (str.length < 1 || typeof str !== 'string')
    {
        return null
    }
    else {
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
    return (newStr.join(''))
}
}
 
function changeBackgroundColor() {
    console.log('changing background color....')
    const myBody = document.querySelector('#body')
    const colors = ["red","yellow","slateblue","green","darkcyan"]
    myBody.style["background-color"] = colors[Math.floor(Math.random() * 5)]
}


// function addNewDOMElement() {
        
//         window.addEventListener('DOMContentLoaded', (event) => {
//             console.log('DOM fully loaded and parsed');
//             const newElement = document.createElement('p')
//             newElement.setAttribute('id','new-dom')
//             const mainElement = (document.getElementById('new-elements'))
//             newElement.innerText = `I'm new here!`
//             mainElement.appendChild(newElement)
//         })
// }
    


// function delDomElement() {
//         const newElements = document.getElementById('new-dom')
//         newElements.remove()
//     }

export {
    // addNewDOMElement,
    duplicateString,
    reverseString,
    countVowels,
    returnRandomString,
    uppercaseAll,
    uppercaseSome,
    changeBackgroundColor
}



