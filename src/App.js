import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'
import UIElementsLesson from './components/UIElementLesson';

function App() {
  return (
    <div className="App">
      <Header title="Teacher Assistant App" description="Your digital classroom helper"/>
      <Main description="this is the main content of the page"/>
      <Footer description="©Copyright Soleo" />
      <UIElementsLesson />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
