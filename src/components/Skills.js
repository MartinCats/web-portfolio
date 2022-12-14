import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import javascript from "../assets/img/js.png";
import reactimg from "../assets/img/react.png";
import node from "../assets/img/node.png";
import express from "../assets/img/express.png";
import mongodb from "../assets/img/mongodb.png";
import git from "../assets/img/git.png";
import sql from "../assets/img/sql.png";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I'm still a beginner, but I'll keep trying to get better. 😎</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={html} alt="" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={javascript} alt="" />
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <img src={reactimg} alt="" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={node} alt="" />
                                <h5>NodeJS</h5>
                            </div>
                            <div className="item">
                                <img src={express} alt="" />
                                <h5>Express</h5>
                            </div>
                            <div className="item">
                                <img src={mongodb} alt="" />
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="" />
                                <h5>Git</h5>
                            </div>
                            <div className="item">
                                <img src={sql} alt="" />
                                <h5>MySQL</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
