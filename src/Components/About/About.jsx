import React from 'react'
import styled from "./About.module.css"
import img from "../files/1734945489276-removebg.png"

const About = () => {
  return (
    <div id="about" className={styled.flex}>
      <div className={styled.div1}>
        <p className={styled.top}>
          I am a Full Stack Web Developer specializing in the MERN stack, driven
          by a passion for coding and exploring new technologies. I thrive in
          environments where I can continuously learn, adapt, and grow,
          embracing the cycles of learning, unlearning, and relearning to stay
          ahead in this dynamic field.
        </p>
        <p>
          With an insatiable curiosity and a dedication to meaningful work, I am
          eager to channel my skills into creating impactful solutions. My
          journey as a developer is fueled by a commitment to growth,
          innovation, and making a difference through technology.
        </p>
      </div>
      <div className={styled.div2}>
        <img className={styled.img} src={img} alt="photo1" />
      </div>
    </div>
  );
}

export default About