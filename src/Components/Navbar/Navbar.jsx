import React from 'react'
import styled from "./Navbar.module.css"
import {Link } from "react-scroll";
import img from "../files/27938162.jpeg"

const Navbar = () => {
  return (
    <div className={styled.main}>
      <div className={styled.flex}>
        <div>
          <img className={styled.img} src={img} alt="logo" />
        </div>
        <div className={styled.margin}>
          <Link
            to="intro"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            duration={500}
            className={styled.left}
          >
            About
          </Link>
        </div>
        <div className={styled.left}>
          <Link
            to="skills"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            duration={500}
            className={styled.left}
          >
            Skills
          </Link>
        </div>
        <div className={styled.left}>
          <Link
            to="exprience1"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            duration={500}
            className={styled.left}
          >
            Exprience
          </Link>
        </div>
        <div className={styled.left}>
          <Link
            to="project"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            duration={500}
            className={styled.left}
          >
            Project
          </Link>
        </div>
        <div className={styled.left}>
          <Link
            to="contact"
            hashSpy={true}
            spy={true}
            smooth={true}
            delay={100}
            duration={500}
            className={styled.left}
          >
            Contact
          </Link>
        </div>
        <div className={styled.left}>
          <a
            className={styled.p1}
            href="https://drive.google.com/file/d/178qJT9KxQuZZaUqXyOC8-04UhlY42zL0/view?usp=sharing"
            target="blank"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar
