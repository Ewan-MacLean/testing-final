import './components/functions/functions'
import { addDomElement, changeBackgroundColor, countVowels, DOMFunctions, popup, returnRandomString, reverseString, toRomanNumeral, uppercaseAll, uppercaseSome } from './components/functions/functions';

// popup()

reverseString('oink')
countVowels('spiderman')
// toRomanNumeral(6)
returnRandomString()
uppercaseAll('this is a lowercase sentence?')
uppercaseSome('hamburgers are a nutritious meal')
addDomElement()

function addNewDOMElement() {
  const newElement = document.createElement('p')
  const mainElement = (document.getElementById('main'))
  newElement.innerText = 'im new here! '
  // console.log(newElement)
  mainElement.appendChild(newElement)
}

// delDomElement()
// animation()
// flipText()

function App() {
  return (
    <div className="App">
      <div id='main'>

      <button className='bgcolor-button' name='changeBG' onClick={changeBackgroundColor}>Change background color</button>
      <button className='addDOM-button' name='addDOM' onClick={addNewDOMElement}>Add something!</button>
      
      </div>
    </div>
  );
}



export default App;
