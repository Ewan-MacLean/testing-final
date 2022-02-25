import './components/functions/functions'
import {changeBackgroundColor, countVowels, duplicateString, returnRandomString, reverseString, uppercaseAll, uppercaseSome } from './components/functions/functions';
import Checkbox from './components/checkbox/checkbox'
import Textarea from './components/textarea/textarea';
import Radio from './components/radio/radio'
import './App.css'


// duplicateString('hello! nice to meet you.')
// console.log(reverseString('hello! nice to meet you.'))
// countVowels('spiderman')
// returnRandomString()
// uppercaseAll('this is a lowercase sentence?')
// uppercaseSome('hamburgers are a nutritious meal')

function addNewDomElement() {
  const newElement = document.createElement('p')
  newElement.setAttribute('id','new-dom')
  const mainElement = (document.getElementById('new-elements'))
  newElement.innerText = `I'm new here!`
  mainElement.appendChild(newElement)
}

function delDomElement() {
  const newElements = document.getElementById('new-dom')
  newElements.remove()
}

function App() {
  return (
    <div className="App">
      <div id='main'>

        <button className='bgcolor-button' name='changeBG' onClick={changeBackgroundColor}>Change background color <br></br>(random)</button>
        <button className='addDOM-button' name='addDOM' onClick={addNewDomElement}>Add something!</button>
        <button className='delDOM-button' name='delDOM' onClick={delDomElement}>Delete something!</button>
        <Checkbox/>
        <Textarea/>
        <Radio/>

        <div id='new-elements'>

        </div>
      
      
      </div>
    </div>
  );
}



export default App;
