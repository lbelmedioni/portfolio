import React from 'react';
import './App.css';
import web from './images/web.jpg';
import desktop from './images/desktop.jpg';
import flutter from './images/flutter.png';
import design from'./images/design.jpg';
import html from './images/html.png';
import css from './images/css.jpg';
import js from './images/js.avif';
import nodejs from './images/nodejs.jpg';
import c from './images/c.png';
import react from './images/react.jpeg';
import facebook from './images/facebook.png';
import instagram from './images/instagram.png';




function App() {
  return (
    <div className="App">
    <nav className='navbar'>
    <h3 className='logo'>Leena-Bel</h3>
    <a href='#Home' className='active'>Home</a>
    <a href='#Services'>Services</a>
    <a href='#footer'>Contacts</a>
  </nav>
  <header>
    <section className='section Home' id='Home'>
      <div className='content'>
        <h1>Hello,I'am Leena </h1>
        <h2>I build things for the web.</h2>
        <p>i design and code beautifully simple things,and i love what i do.</p>
        <button>Download CV</button>
      </div>
    </section>
  </header>
  <section className='services' id='services'>
    <h2>What I Do</h2>
    <div className='myservice'>
      <div className=' service websites'>
        <img src={web} />
        <p>a websites using html css js react and nodeJs</p>
      </div>
      <div className='service flutterApps'>
        <img src={flutter} />
        <p>mobile application using flutte & dart</p>
      </div>
      <div className='service desktopApps'>
        <img src={desktop} />
        <p>desktop applications using C#</p>
      </div>
      <div className='service design'>
        <img src={design} />
        <p> UI Design</p>
      </div>
    </div>
  </section>
  <section className='tools'>
    <h3>Languages and tools</h3>
    <div className='list'>
      <div className='tool'><img src={html} /></div>
      <div className='tool'><img src={css} /></div>
      <div className='tool'><img src={js} /></div>
      <div className='tool'><img src={nodejs} /></div>
      <div className='tool'><img src={c} /></div> 
      <div className='tool'><img src={react} /></div>
      <div className='tool'><img className='flutter' src={flutter}/></div>
    </div>
  </section>
  <footer id='footer'>
    <div className='contact'>
      <a href=''><img src={facebook}/></a>
      <a href=''><img src={instagram}/></a>
    </div>
  </footer>
</div>
  );
}

export default App;
