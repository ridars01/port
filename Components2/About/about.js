import React from 'react' ; 
import './about.css';
/*import icon from './imgs/icon2.jpg' ; 
import me2 from './imgs/me2.jpg';*/
import me from './imgs/me.jpg' ;

const About = () =>{
    return(
        <div>
           <main className = "about-box about-container">
               <div className = "item">
               <img className = "img-style"src ={me}></img>
               </div>
               <div className = "about-box-text item" >
               <h3 className = "about-header-style " id ="aboutme">ABOUT ME : </h3>
               <p className = "about-para-style"> A coffee lover and adventure enthusiast , I am a passionate developer and certified scrum master. My journey in technology began during my junior year of highschool: taking my first computer science class and watching the words “Hello World” appear on my screen made me certain that this is the field I wanted to build my career in. Down the road I had found out about Road to Hire - A non profit organization that trains young adults through a  rigorous six-month program in technology and personal development and later pursue a career in the corporate world- this was a game changer opportunity for me. I gained many profound skills and assets that I actively use on a daily basis . Now I am focused on leveraging my skills and expanding my knowledge so I can stay at the cutting edge of new technologies. 
</p>
               </div>
            </main>
        </div>
    )
}
export default About