import React, { useState } from 'react'
import styled from './Project.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from 'react-icons/bi'
// import Modal from 'react-modal'
const Project = () => {
  // const [isOpen, setIsOpen] = useState(false)
  // const [isOpen1, setIsOpen1] = useState(false)
  // const [isOpen2, setIsOpen2] = useState(false)
  // const [isOpen3, setIsOpen3] = useState(false)
  // const [isOpen4, setIsOpen4] = useState(false)
  // const [isOpen5, setIsOpen5] = useState(false)
  return (
    <div id="project">
      <h1 className={styled.mid}>Projects</h1>
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://miro.medium.com/max/1400/1*w-1UtJpNJ-zT9PFMSn3kuw.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Wow Skin Science Website</h2>
          <div className={styled.box}>
            <p>
              Its a e-commerce nature inspired beauty brand, it is committed to
              curating safe skin and hair care products for everyone.
              {/* <p className={styled.blue} onClick={() => setIsOpen(true)}>
                Read More
              </p> */}
            </p>
            {/* <Modal className={styled.background} isOpen={isOpen}>
              <h1>Airbnb</h1>
              <p>
              Its a e-commerce nature inspired beauty brand, it is committed to curating safe
              skin and hair care products for everyone.

              </p>
              <p>
               
                <h3>
                  {' '}
                  Tech Stack: Redux, NodeJs, Mongoose, MongoDB,
                  Express.
                </h3>
                A collaborative project in 5 days with 4 people
                <br />
                Roles & Responsibility: : Cart-page, checkout functionality,
                bath&body, wellness, massage, child&mother page.
              </p>
              <button onClick={() => setIsOpen(false)} className={styled.btn}>
                Close
              </button>
            </Modal> */}
          </div>
          <h5>
            NodeJS || MongoDb || Mongoose || Express || HTML || CSS ||
            Javascript
          </h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/AakaShVSh/fw15-buywow-unit3-project"
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="blank"
              className={styled.size}
              href="https://fluffy-mermaid-1fa62f.netlify.app/index.html"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
      {/* ----project2 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://miro.medium.com/max/700/0*aht_DZVcyg244WF-.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Sephora</h2>
          <div className={styled.box}>
            <p>
              It is a e-commerce platform where they provide beauty products for
              woman.
              {/* <p onClick={() => setIsOpen1(true)}  className={styled.blue}>
                Read More
              </p> */}
            </p>
            {/* <Modal className={styled.background} isOpen={isOpen1}>
              <h1>LinkedIn</h1>
              <p>
              This is the clone of LinkedIn, which is a web application primarily used for professional networking and career development.
              You can invite anyone to connect (and accept their invitations to connect with you), but they must have their own LinkedIn account to use the site. LinkedIn saves the connections that you make to a list called My Network.
              </p>
              <p>
                
LinkedIn enables you to network with people and professional organizations in your industry.
                <h3> Tech Stack: React, Redux, Firebase, Styled-Components</h3>
                A collaborative project in 5 days with 4<br />
                people. Roles & Responsibility: Built a profile page of the
                user. Get and Post and Update data of profile page using firebase.
              </p>
              <button onClick={() => setIsOpen1(false)} className={styled.btn}>
                Close
              </button>
            </Modal> */}
          </div>
          <h5>HTML || CSS || Javascript || MVC</h5>
          <div className={styled.flex}>
            <a
              href="https://github.com/15VIKRANT/SEPHORA/tree/branch1"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target="blank"
              href="https://serene-naiad-8e1b8f.netlify.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* ----project3 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://miro.medium.com/max/640/1*ovQHQOfNRMYDJ5rF4Vj1Wg.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Ketto</h2>
          <div className={styled.box}>
            <p>
              Ketto is India's best and most trusted crowdfunding website which
              has helped millions of needies.
              {/* <p onClick={() => setIsOpen2(true)} className={styled.blue}>
                Read More
              </p> */}
            </p>
            {/* <Modal className={styled.background} isOpen={isOpen2}>
              <h1>Naukri.com</h1>
              <p>
                Naukri.com is a recruitment platform that provides
                hiring-related services to corporates/recruiters, placement
                agencies and to company.
              </p>
              <p>
                The website allows job seekers to find the right job that
                matches their aspirations.
                <h3> Tech Stack: React, Redux, Thunk, Axios, JavaScript</h3>
                A collaborative project in 5 days with 3<br />
                people. Roles & Responsibility: Built a profile page of the
                user. Built a resume page and store information at the JSON
                server. Built a host page to post jobs with all required
                details. Built homepage with functionality.
              </p>
              <button onClick={() => setIsOpen2(false)} className={styled.btn}>
                Close
              </button>
            </Modal> */}
          </div>
          <h5>React js || Chakra UI</h5>
          <div className={styled.flex}>
            <a
              target="blank"
              href="https://github.com/J-Prajwal/ketto-cw--true-mine-3269.git"
              className={styled.size}
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target={"blank"}
              href="https://ketto-true-mine3269.netlify.app/"
              className={styled.size}
            >
              <BiLink className={styled.size} />{" "}
            </a>
          </div>
        </div>
      </div>
      {/* -------- project 4 */}
      <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://miro.medium.com/max/640/1*5GCEblAvD64T5gAxGr2IFQ.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Reliance Digital</h2>
          <div className={styled.box}>
            <p>
              It is a e-commerce website which provides all kinds of electronic
              to us.
              {/* <p className={styled.blue} onClick={() => setIsOpen3(true)}>
                Read More
              </p> */}
            </p>
            {/* <Modal className={styled.background} isOpen={isOpen3}>
              <h1>Sudoku Solver</h1>
              <p>
              Sudoku Solver is a Website that gives you the Solution of Every Sudoko Problem that you input and also you can visualize each step of how the sudoku is getting solved.
              </p>
              <p>
                A website that allows users to solve any sudoku problem
                <h3>
                  {' '}
                  Tech Stack: HTML, CSS, JavaScript
                </h3>
                Solo Project was done in 2 days.
                <br />
              </p>
              <button onClick={() => setIsOpen3(false)} className={styled.btn}>
                Close
              </button>
            </Modal> */}
          </div>
          <h5>HTML || CSS || JavaScript</h5>
          <div className={styled.flex}>
            <a
              target={"blank"}
              className={styled.size}
              href="https://github.com/AakaShVSh/Reliance-Digital"
            >
              {" "}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              target={"blank"}
              className={styled.size}
              href="https://reliance-digital-f551.onrender.com/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
      {/* ------ project 5 */}
      {/* <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://assets.website-files.com/5d55f1425cb6b7a18aa77528/5e7d481d23b951f6d15b61f2_Screen%20Shot%202020-03-26%20at%205.25.44%20PM.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>AirGarage</h2>
          <div className={styled.box}>
            <p>
            AirGarage helps churches and small businesses generate extra funding and income by renting out their unused parking spaces
              <p className={styled.blue} onClick={() => setIsOpen4(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen4}>
              <h1>AirGarage</h1>
              <p>
              AirGarage helps churches and small businesses generate extra funding and income by renting out their unused parking spaces.
              </p>
              <p>
                A website that allows users to rent or lease accommodation not
                limited to bed and breakfasts, hostels, homestays, apartments,
                rooms, or hotels.
                <h3>
                  {' '}
                  Tech Stack: HTML, CSS, JavaScript
                </h3>
                A collaborative project in 5 days with 2 people
                <br />
                Roles & Responsibility: Make Navbar and Footer with responsive website.
              </p>
              <button onClick={() => setIsOpen4(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>HTML || CSS || JavaScript</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/MeeraMendhe/Airgarage"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="https://meeramendhe.github.io/Airgarage/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div>
      </div>
           {/* ------ project 6 */}
      {/* <div className={styled.width}>
        <div className={styled.left}>
          <img
            className={styled.img}
            src="https://www.aptiv.com/images/default-source/games/memory-game-share-image.png"
            alt="logo"
          />
        </div>
        <div className={styled.right}>
          <h4 className={styled.color}>Featured</h4>
          <h2>Memory Game</h2>
          <div className={styled.box}>
            <p>
            Memory games give space to critical thinking and that helps children nurture their attention to detail.
              <p className={styled.blue} onClick={() => setIsOpen5(true)}>
                Read More
              </p>
            </p>
            <Modal className={styled.background} isOpen={isOpen5}>
              <h1>Mwmory Game</h1>
              <p>
Playing memory games can improve other brain functions, such as attention, concentration, and focus. Memory games give space to critical thinking and that helps children nurture their attention to detail. Memory games can improve visual recognition. ... A good short-term memory can improve a person's long-term memory too.
              </p>
              <p>
                A website that allows users to solve any memory game
                <h3>
                  {' '}
                  Tech Stack: React
                </h3>
                Solo Project was done in 1 days.
                <br />
              </p>
              <button onClick={() => setIsOpen5(false)} className={styled.btn}>
                Close
              </button>
            </Modal>
          </div>
          <h5>React</h5>
          <div className={styled.flex}>
            <a
              className={styled.size}
              href="https://github.com/MeeraMendhe/MemoryGame"
            >
              {' '}
              <AiFillGithub className={styled.size} />
            </a>
            <a
              className={styled.size}
              href="memorygame27.herokuapp.com/"
            >
              <BiLink className={styled.size} />
            </a>
          </div>
        </div> */}
      {/* </div>   */}
    </div>
  );
}

export default Project
