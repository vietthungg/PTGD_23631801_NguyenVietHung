import React from 'react'
import './App.css'
import Bai1 from './components/Bai1/bai1';
import Counter from './components/bai2/Counter';
import InputForm from './components/bai3/InputForm';
import Bai4 from './components/bai4/Bai4';
function App() {
  return (
    <>
    <div>
      <hr />
      <p>đây là bài 1</p>
      <Bai1 />
      <hr />
    </div>
    <div>
      <p>Đây là bài 2</p>
      <Counter />
      <hr />
    </div> 

    <div>
      <p>Đây là bài 3</p>
      <InputForm />
      <hr />
    </div>
      
    <div>
      <p>Đây là bài 4</p>
      <Bai4/>
      <hr />
    </div>
    </>
  );
}

export default App
