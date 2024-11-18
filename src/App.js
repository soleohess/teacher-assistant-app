import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css'
import UIElements from './components/UIElements';

function App() {
  return (
    <div className="App">
      <Header title="Teacher Assistant App" description="Your digital classroom helper"/>
      <Main description="this is the main content of the page"/>
      <Footer description="©Copyright Soleo (teehee)" />
      <UIElements heading="UI Elements" content="This is some content for the UI elements component." />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
