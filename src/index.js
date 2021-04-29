import React from 'react';
import ReactDOM from 'react-dom';
import NameComponent from './components/NameComponent';
import './index.css';
import ContactComponent from './components/ContactComponent';

function App() {
  return(
    <div className="container mt-5" >
      < ContactComponent />
    </div>
  )
}

const container = document.getElementById('root');

ReactDOM.render(<App />, container);