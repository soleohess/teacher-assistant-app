import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';
import UIElements from './components/UIElements';
import TestButton from './components/TestButton';
import DropdownMenu from './components/DropdownMenu';
import Register from './components/Register';
import Login from './components/Login';
import Tabs from './components/Tabs';

function App() {
  const buttonPress = () => {
    window.open("https://www.google.com", "_blank");
  };

  return (
    <div className="App">
      <Tabs />
      <Header title="Teacher Assistant App" description="Your digital classroom helper"/>
      <Main description="this is the main content of the page"/>
      <DropdownMenu />
      <Register />
      <Login />
      <TestButton onPress={buttonPress} label={"TestButton"}/> 
      <UIElements heading="UI Elements" content="This is some content for the UI elements component." />
      <Footer description="footer text placeholder" />
    </div>
  );
}

export default App;