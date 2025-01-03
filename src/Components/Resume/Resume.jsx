import React from 'react'
import styled from "./Resume.module.css"
const Resume = () => {
  return (
    <div id="resume">
      <h1 className={styled.mid}>Resume</h1>
      <div  className={styled.flex}>
      {/* <img className={styled.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF01H2L8h62qzU9Fykx2hig89U0Q73-EwVug&usqp=CAU" alt="cv"/> */}
      <a className={styled.img} href="https://drive.google.com/file/d/178qJT9KxQuZZaUqXyOC8-04UhlY42zL0/view?usp=sharing" download><button className={styled.btn}>See My Resume</button></a>
      </div>
     
    </div>
  )
}

export default Resume
