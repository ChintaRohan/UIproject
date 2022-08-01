import React from 'react';
import './about.css';
import marvel from './MCU/marvel.JPG';
import avengers from './MCU/avengers.JPG'
import Carousel from 'react-bootstrap/Carousel';
import facebook from './footer/facebook.svg';
import Twitter from './footer/twitter.svg';
import Instagram from './footer/instagram.svg';
import Linkedin from './footer/linkedin.svg';
export default function About() {
    return (
        <div className='a-bg'>
            <Carousel>
              <Carousel.Item>
                <img className="alogo" src={marvel} alt='avengers1' />
              </Carousel.Item>
              <Carousel.Item>
                <img className="alogo" src={avengers} alt='avengers2' />
              </Carousel.Item>
            </Carousel>
            <div className='aboutBody'>
                This website consists of movies made by <b className='marvel'>Marvel</b> called "Marvel Cinematic Universe(MCU)" which are clubbed into groups and each group is called a Phase. 
                Phase I,II,III are called infinity saga and Phase IV, V, VI are called Multiverse saga. In this website the movies 
                are posted in the order of their of their release date....yeah not according to the timeline of the MCU. If you like to watch 
                the movies in the order of timeline please check the number below the play buttom which shows the position of movie on the timeline. 
            </div>
            <p align="center" className='aboutQuote'><b>Happy Binge Watching</b></p>
            <div class="footer" ><br />
                <button className='footerButton'><img src={facebook} className="footerImage" alt="facebook"></img></button>
                <button className='footerButton'><img src={Instagram} className="footerImage" alt="Instagram"></img></button>
                <button className='footerButton'><img src={Linkedin} className="footerImage" alt="Linkedin"></img></button>
                <button className='footerButton'><img src={Twitter} className="footerImage" alt="Twittwe"></img></button><br /><br />
                <p className='footerNotes'>Chinta Rohan, Trainee Analyst<br />
                    Wissen Technology</p>
            </div>
        </div>
    );
}