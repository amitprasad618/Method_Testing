import React from 'react';
import Navbar from './components/Navbar';
import MobileForm from './components/MobileForm';
import Footer from './components/Footer';

function App() {
  return (<>
    <div>
      <Navbar />
    </div>
    <div>
      <MobileForm />
    </div>
    <div>
      <Footer/>
    </div>
  </>);
}

export default App;