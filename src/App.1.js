import React from 'react';

export function App() {
  return (
    <div className="App">
      <nav className='navbar'>
        <h3 className='logo'>Leena-Bel</h3>
        <a href='#Home' className='active'>Home</a>
        <a href='#Services'>Services</a>
        <a href='#Prejects'>Projects</a>
        <a href='#footer'>Contacts</a>
      </nav>
      <div className='menu'>
        <ul>
          <li><a href='#Home' className='active'>Home</a></li>
          <li><a href='#services' className='active'>Services</a></li>
          <li><a href='#Projects' className='active'>projects</a></li>
          <li><a href='#footer' className='active'>Contacts</a></li>
        </ul>
      </div>
      <header>
        <section className='section Home' id='Home'>
          <div className='content'>
            <h1>Hi,I'am Leena Belmedioni</h1>
            <p>I'am a computer science student</p>
            <button>Download CV</button>
          </div>
        </section>
      </header>

    </div>

  );
}
