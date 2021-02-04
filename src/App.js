import React from 'react';
import Header from './components/header'
import Content from './components/content'
import { HeaderProvider } from './context/headerContext'
import './App.css';


function App() {
  return (
    <HeaderProvider>
      <div className="App">
        <Header/>
        <Content/>
      </div>
    </HeaderProvider>
  );
}

export default App;
