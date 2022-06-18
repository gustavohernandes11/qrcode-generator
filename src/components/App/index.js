import React, { useState } from 'react'
import './index.css';
import Heading from '../Heading'
import FormSection from '../FormSection'
import Content from '../Content'
import Footer from '../Footer'

function App() {
  const [inputValue, setInputValue] = useState()


  function handleClick() {
    const input = document.getElementById('main-input')
    setInputValue(input.value)
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
