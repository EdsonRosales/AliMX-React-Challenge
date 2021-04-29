import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import NameComponent from './components/NameComponent';
import ContactComponent from './components/ContactComponent';
import BirthdateComponent from './components/BirthdateComponent';
import HeaderComponent from './components/HeaderComponent';
import '../src/components/styles/Header.css';

function App() {

  const [firstComponent, setFirstComponent] = useState(true);
  const [secondComponent, setSecondComponent] = useState(false);
  const [thirdComponent, setThirdComponent] = useState(false);
  const [nameData, setNameData] = useState({});
  const [birthdateData, setBirthdateData] = useState({});
  const [contactData, setContactData] = useState({});

  const updateName = (data) => {
    setNameData(data);
  }
  const nextStepName = () => {
    setSecondComponent(true);
  }

  const updateBirthdate = (data) => {
    setBirthdateData(data);
  }
  const nextStepBirthdate = () => {
    setThirdComponent(true);
  }

  const updateContact = (data) => {
    setContactData(data);
  }

  const finish = () =>{
    sessionStorage.setItem('name', nameData);
    sessionStorage.setItem('birthdateData', birthdateData);
    sessionStorage.setItem('contactData', contactData);
  }

  return(
    <div className="container mt-5" >
      <div>
        <HeaderComponent />
      </div>
      {firstComponent ? <NameComponent  onUpdateName={(data) => updateName(data)} nextStep={() => nextStepName()} /> : null }
      {secondComponent ? <BirthdateComponent onUpdateBirthdate={(data) => updateBirthdate(data)} nextStep={() => nextStepBirthdate()} /> : null}
      {thirdComponent ?  <ContactComponent onUpdateContact={(data) => updateContact(data)}  name={nameData} birthdate={birthdateData} finish={() => finish()} /> : null}
 
    </div>
  )
}

const container = document.getElementById('root');

ReactDOM.render(<App />, container);