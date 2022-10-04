import React from 'react'
import Slide from 'react-reveal/Slide';
import Roll from 'react-reveal/Roll';
import Swing from 'react-reveal/Swing';

import { useEffect, createRef } from "react";

import lottie from "lottie-web";
import animation from "../bodymovin/94701-mobile-web.json";
import animation2 from "../bodymovin/85468-graphic-earnings-rise (1).json";
import animation3 from "../bodymovin/95577-graphics-day.json";
const About = () => {


    let animationContainer = createRef();
    let animationContainer2 = createRef();
    let animationContainer3 = createRef();

    useEffect(() => {
        const anim = lottie.loadAnimation({
          container: animationContainer.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: animation
        });
        const anim2 = lottie.loadAnimation({
            container: animationContainer2.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation2
          });
          const anim3 = lottie.loadAnimation({
            container: animationContainer3.current,
            renderer: "svg",
            loop: true,
            autoplay: true,
            animationData: animation3
          });
        return () => anim.destroy(); // optional clean up for unmounting
      }, []);


      lottie.loadAnimation({
        container: animationContainer.current, // current instance of our container!
        animationData: animation, // animation file!
        renderer: "svg",
        loop: true,
        autoplay: true
      });
      lottie.loadAnimation({
        container: animationContainer2.current, // current instance of our container!
        animationData: animation2, // animation file!
        renderer: "svg",
        loop: true,
        autoplay: true
      });
      lottie.loadAnimation({
        container: animationContainer3.current, // current instance of our container!
        animationData: animation3, // animation file!
        renderer: "svg",
        loop: true,
        autoplay: true
      });
    const [state] = React.useState({heading: 'Biz Kimiz?', text: 'Dolore dolor rebum et et ipsum, dolore nonumy sed sit diam et, sea voluptua labore diam duo rebum voluptua consetetur.Sed erat amet sanctus amet sed ipsum nonumy. Diam voluptua dolor erat ea, stet sea elitr ipsum eos et. Accusam.'});
    const [sections] = React.useState ([
        {id: 1, icon : 
        
            <div className="" ref={animationContainer}>
                      
            </div>
       , heading : 'Dijital Market', text: ' Dolore dolor rebum et et ipsum, dolore nonumy sed.' },
       {id: 2, icon:  <div className="" ref={animationContainer2}>
                      
       </div>, heading: 'Web Geliştirme', text: 'Dolore dolor rebum et et ipsum, dolore nonumy sed.'},
     {id: 3 , icon :  <div className="" ref={animationContainer3}>
                      
     </div>, heading: 'Grafik Dizayn', text: 'Dolore dolor rebum et et ipsum, dolore nonumy sed.'}
    ]);



    return (
        <div className="about">
          
       
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <h4 className="about__h4">{state.heading}</h4>
                    </div>
                    <div className="col-9">
                        <div className="about__text">
                        <Slide top>
                        <p>{state.text}</p>
                        </Slide>
                        </div>
                    </div>
                </div>
                <div className="row mt-60">
                    {sections.map(section => (
                <div className="col-4 pl-15" key={section.id}>
                     <Swing>
                     <div className="about__section" >
                   
                    {section.icon}

                    <div className="about__section-heading">
                        <h6>{section.heading}</h6>
                    </div>
                    <div className="about__section-text">
                    <p>{section.text}</p>
                    </div>
                </div>
        </Swing>
                
            </div>
                    ))}

            </div>
            </div>

        </div>
    )
}

export default About
