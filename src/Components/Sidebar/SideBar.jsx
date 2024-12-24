import React from 'react'
import { AiFillGithub,AiFillTwitterCircle,AiFillLinkedin,AiFillFacebook } from "react-icons/ai";
import {SiGmail} from "react-icons/si"
import styled from './SideBar.module.css'
const SideBar = () => {
  return (
    <div className={styled.fix}>
          <a
              className={styled.color3}
              href="https://github.com/AakaShVSh" target="blank"
            >
              <AiFillGithub className={styled.color1}/><br/>
            </a>
            <a className={styled.color3} href="mailto:aakashvishwakarma059@gmail.comm"  target="blank">
              <SiGmail className={styled.color} /><br/>
            </a>
            <a
              className={styled.color3}
              href="https://twitter.com/a_k_vish_" target="blank"
            >
              <AiFillTwitterCircle className={styled.color}/><br/>
            </a>     <a
              className={styled.color3}
              href="https://www.linkedin.com/in/aakash-vishwakarma-200a42221/"target="blank"
            >
              <AiFillLinkedin className={styled.color}/><br/>
            </a>     <a
              className={styled.color3}
              href="https://www.facebook.com/aakash.vishwakarma.798278"target="blank"
            >
              <AiFillFacebook className={styled.color}/><br/>
            </a>
    
    </div>
  )
}

export default SideBar
