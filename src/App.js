import React, { useState } from 'react'
import './App.css';
import Heading from './components/Heading'
import FormSection from './components/FormSection'
import Content from './components/Content'
import Footer from './components/Footer'

function App() {
  const [inputValue, setInputValue] = useState()


  function handleClick() {
    const input = document.getElementById('main-input')
    setInputValue(input.value)
    console.log(input)
  }

  return (
    <div className="App">
      <Heading />
      <FormSection onClick={handleClick} />
      <Content value={inputValue} />
      <Footer />
    </div>
  );
}

export default App;
