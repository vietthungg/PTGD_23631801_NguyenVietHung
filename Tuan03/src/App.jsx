import React from 'react'
import './App.css'
import Bai1 from './components/Bai1/bai1';
import Counter from './components/bai2/Counter';
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
      
      
    </>
  );
}

export default App
