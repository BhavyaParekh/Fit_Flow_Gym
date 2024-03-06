import React from "react";
import aimage from './images/about.png'
import { Button } from "react-scroll";

function About() {
  return (
    <div id="about">
        <div className="about-image">
            <img src={aimage} alt=""/>
        </div>
        <div className="about-text">
            <h1>LEARN MORE ABOUT US</h1>
            <p> <h3>Welcome to our FitFlow website, where we believe in empowering individuals to lead healthier, 
                happier lives through fitness and wellness. At FitFlow, we strive to create a supportive and inclusive 
                environment where individuals of all fitness levels feel welcomed and inspired to achieve their goals.</h3><br/><br/>

            <h4>Our mission is to provide our members with the tools, guidance, and support they need to reach their 
            fitness aspirations. Whether you're aiming to lose weight, build muscle, improve flexibility, or simply enhance your
             overall well-being.<br/>
             <br/><br/>

            At FitFlow, we understand that everyone's fitness journey is unique. That's why we offer a user history through which 
            you can get to know  wheather you are fit , under weight or over weight and in how much time duration your weight is 
            increasing or decreasing. So Let's check your fitness.</h4></p>
            <a href='/login' className='header-btn'>Let's Check Your Fitness</a>
        </div>

    </div>
  )
}

export default About