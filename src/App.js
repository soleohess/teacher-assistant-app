import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'

function App() {
  return (
    <div className="App">
      <Header title="Teacher Assistant App" description="Your digital classroom helper" />
      <Footer title="©Copyright Me" description="Footer Description" />
      {/* Other components will go here */}
    </div>
  );
}

export default App;
