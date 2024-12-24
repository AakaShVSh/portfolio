import React, { useState } from 'react'
import styled from './Contact.module.css'
import emailjs from 'emailjs-com'
import Modal from 'react-modal'
let obj={
  "user_name":"",
  "contact_number":"",
  "user_email":"",
  "message":"",
}
const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [data,setData]=useState(obj)
  const handleChange = (e)=>
  {
    let {name,value}=e.target
    let payload={
      [name]:value,
      ...data
    }
    setData(payload)
  }
  const handleClick = () => {
    setIsOpen(true)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_g45clnj',
        'template_5h4ng1a',
        e.target,
        'gfm_QmlRUGXq0QVf3',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    e.target.reset()
  }
  return (
    <form onSubmit={handleSubmit} id="contact">
      <h1 className={styled.h1}>Contact Form</h1>
      <div className={styled.top}>
        <input
           onChange={handleChange}
          className={styled.color}
          name="from_name"
          placeholder="Full Name"
          type="text"
          required

        />
        <input
           onChange={handleChange}
          className={styled.color1}
          name="phone"
          placeholder="Mobile Number"
          type="text"
          required
        />
      </div>
      <div>
        <input
           onChange={handleChange}
          className={styled.color2}
          name="email"
          placeholder="Email Id"
          type="email"
          required
        />
      </div>
      <div>
        <input
           onChange={handleChange}
          className={styled.color2}
          name="message"
          placeholder="Subject of the message"
          type="text"
          required
        />
      </div>
      <button  type="submit"  onClick={handleClick} className={styled.btn}>
        Send Message
      </button>
      <Modal className={styled.background} isOpen={isOpen}>
        <h1 className={styled.h1}>Congratulation You Successfully send mail</h1>
        <button onClick={() => setIsOpen(false)} className={styled.btn}>
          Close
        </button>
      </Modal>
    </form>
  )
}

export default Contact
