import React from 'react';
import Navbar from './Components2/Navbar/navbar' ; 
import BackgroundImg from './Components2/BackroundImg/BackgroundImg';
import Arrow from './Components2/Arrow/arrow';
import About from './Components2/About/about';
import Resume from './Components2/Resume/resume';
import Gateway from './Components2/Projects/Gateway';
import Hotelapp from './Components2/Projects/Hotelapp'; 
import Gg from './Components2/Projects/Gg'; 
import Navbarpro from './Components2/Projects/Navbarpro' ; 
import Githubcards from './Components2/Projects/Githubcards';
import Todolist from './Components2/Projects/Todolist' ; 
import Tictactoe from './Components2/Projects/Tictactoe' ; 
import Ecom1 from './Components2/Projects/Ecom1' ;
import Ecom2 from './Components2/Projects/Ecom2';
import Lifecycle from './Components2/Projects/Lifecycle'; 
import Wiki from './Components2/Projects/Wiki';
import Hackathon2 from './Components2/Projects/Hackathon2' ;
import Contact from './Components2/Contact/contact' ;
import Footer from './Components2/Footer/footer' ;
import './App.css';


const App = () => {
  return (
    <div>
     
      <Navbar/>

      <BackgroundImg />
    {
      <header className="main-header  ">
       <h1>RIDA FATIMAH</h1>
    </header>}

     <Arrow />
      <About />

      <div className="section-header">
        <h3 className="section-header-style" id ="projects">PROJECTS :</h3>
        <p className="section-tip-style"> Click on project to find out more ! </p>
      </div>



      <section className="grid-container">

        <div className="grid-item">
          <Gateway />
        </div>



        <div className="grid-item">
          <Hotelapp />
        </div>

        <div className="grid-item">
          <Gg/>
        </div>

        <div className="grid-item">
          <Navbarpro/>
        </div>

        <div className="grid-item">
          <Githubcards/>
        </div>
        <div className="grid-item">
          <Todolist/>
        </div>

        <div className="grid-item">
          <Tictactoe/>
        </div>
        <div className="grid-item">
          <Ecom1/>
        </div>
        <div className="grid-item">
          <Ecom2/>
        </div>
        <div className="grid-item">
          <Lifecycle/>
        </div>
        <div className="grid-item">
          <Wiki/>
        </div>
        <div className="grid-item">
          <Hackathon2/>
        </div>

      </section>
      <Resume />
      <div className="section-header">
        <h3 className="section-header-style" id ="contact">CONTACT ME  :</h3>
      </div>
      <Contact/>

   <Footer/>
    </div>

  );
}


export default App;
