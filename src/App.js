import './components/functions/functions'
import { addDomElement, changeBackgroundColor, countVowels, duplicateString, popup, returnRandomString, reverseString, squareNumber, toRomanNumeral, uppercaseAll, uppercaseSome } from './components/functions/functions';

addDomElement()
duplicateString('hello! nice to meet you. ')
// popup()
reverseString('oink')
countVowels('spiderman')
returnRandomString()
uppercaseAll('this is a lowercase sentence?')
uppercaseSome('hamburgers are a nutritious meal')

function addNewDOMElement() {
  const newElement = document.createElement('p')
  newElement.setAttribute('id','new-dom')
  const mainElement = (document.getElementById('main'))
  newElement.innerText = 'im new here!'
  mainElement.appendChild(newElement)
}
function delDomElement() {
  const newElements = document.getElementById('new-dom')
  newElements.remove()
}
squareNumber(8)

function App() {
  return (
    <div className="App">
      <div id='main'>

      <button className='bgcolor-button' name='changeBG' onClick={changeBackgroundColor}>Change background color</button>
      <button className='addDOM-button' name='addDOM' onClick={addNewDOMElement}>Add something!</button>
      <button className='delDOM-button' name='delDOM' onClick={delDomElement}>Delete something!</button>
      
      </div>
    </div>
  );
}



export default App;
