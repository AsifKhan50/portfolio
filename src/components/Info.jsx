import React from 'react'
import profile from '../img/Pic.png'
import 'bootstrap/dist/css/bootstrap.css'
import { BsGithub, BsInstagram, BsLinkedin, BsEnvelope, BsFacebook, BsTwitter } from "react-icons/bs";
import './Info.css'
import Asif_cv from '../img/MOHAMMED ASIF KHAN CV.pdf'
import { Fade } from 'react-reveal';


function Info() {
  return (
    <div >
      <section className='container py-5 my-md-5' id='home'>

        <div className="d-flex flex-wrap justify-content-center align-items-center hero-sec">
          <div className="col-lg-6 col-12 px-3 text-lg-start align-items-center text-center">
            <Fade left>
              <span>Hy! I Am</span>
              <h1 className="pb-2" style={{ fontSize: '4rem' }}>Mohammed Asif<br /> Khan</h1>
              <span className='m-0'>Front-end developer,Programer</span>
              <div className='d-flex flex-wrap justify-content-around social i-icons w-75'>
                <div><a href="https://github.com/AsifKhan50" style={{ color: '#242d49' }}><BsGithub /></a></div>
                <div><a href="https://www.instagram.com/_asif70/?next=%2F" style={{ color: '#242d49' }}><BsInstagram /></a></div>
                <div><a href="https://www.linkedin.com/in/mohammed-asif-khan-82160a236/" style={{ color: '#242d49' }}><BsLinkedin /></a></div>
                <div><a href="https://www.facebook.com/profile.php?id=100008531980836/" style={{ color: '#242d49' }}><BsFacebook /></a></div>
                <div><a href="https://twitter.com/Asifkhan0115" style={{ color: '#242d49' }}><BsTwitter /></a></div>
              </div>
            </Fade>

            <div className='pt-5'><button className='button n-button'>Let's Chat</button></div>
          </div>
          <div className='photo col-lg-6 d-lg-block' style={{ textAlign: 'center' }}>
            <Fade bottom>
              <img src={profile} alt="" className='avatar rounded' style={{ width: '25rem' }} />
            </Fade>
          </div>
        </div>
      </section>
      <div className='about-me' id='about'>
        <div className='container py-5 px-3'>
          <h2>About Me</h2>
          <div className='d-flex flex-wrap justify-content-center align-items-center'>
            <div className='col-lg-6 col-12 mb-auto'>
              <Fade left>
                <p className='col-11'>A focused and goal oriented professional with zeal to make a winning career as Web Application development.
                  Technically strong in Javascript, React, Redux ,Hooks, API Calls , HTML, CSS. Strong communication, interpersonal & technical skills with the ability to grasp new concepts quickly and utilize the same in a productive manner.</p>
              </Fade>
            </div>
            <div className='col-lg-6 col-12 '>
              <Fade right>
                <h4 className='mb-3'><strong>Any type of Query</strong></h4>
                <h5><BsEnvelope />
                  <a href="mailto:mohammedasifkhan621@gmail.com" className='colors p-2 text-decoration-none' style={{ color: '#242d49' }}>mohammedasifkhan621@gmail.com</a>
                </h5>
                <div className='pt-4'>
                  <a href={Asif_cv} style={{ color: '#242d49' }}><button className='btn btn-outline y-button'>download my resume</button></a>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <section className='container pb-5' id='projects'>
        <div className='d-flex flex-wrap py-5 '>
          <div className='col-md-10 col-12 py-4 ms-auto d-flex justify-content-center'>
            <div className='col-12 p-5 d-flex project1 rounded-4'>
              <div className='col-md-8 col-12'>
                <Fade right>
                  {/* <p></p> */}
                  <h2>Transport Management System</h2>
                  <p> The aim of this project is to provide all functionalities related to Transportation,
                    Drivers and Vehicles it is done by using React.js, Material UI and CSS. This project contains several
                    functionalities like Transportation, Driver Enrollment, Driver List, Driver Performance Card and
                    Vehicle List, Vehicle Allotment to Drivers. Where an admin can track all information and can
                    perform operations related to Transportation, Drivers and Vehicles.
                  </p>
                  <div className='pt-4'><a href="#"><button className='button n-button' style={{ boxShadow: 'none' }}>visit!</button></a></div>

                </Fade>
              </div>
            </div>

          </div>

        </div>
        <div className='col-md-10 col-12 py-4 me-auto d-flex justify-content-center'>
          <div className='col-12 p-5 project2 d-flex rounded-4'>
            <div className='col-md-8 col-12'>
              <Fade left>
                <h2>E-LEARNING APP</h2>
                <p>E-Learning is a professional online learning application the application is focused on
                  the Implementation of selected course is provided through this app with executable programming
                  Codes these is a provision to search any word in form of an online dictionary feature that is
                  Available to help learners to search any difficult word. The application is also set to alert Learners
                  on latest job openings</p>
                <div className='pt-4'><a href="#"><button className='button btn-outline y-button' style={{ boxShadow: 'none' }}>visit!</button></a></div>
              </Fade>
            </div>
          </div>
        </div>
        <Fade bottom>
          <div className='d-flex flex-wrap py-lg-5 py-3' id='contact'>
            <div className='col-lg-8 col-12 mx-auto contact p-lg-5 p-4 d-flex flex-wrap rounded-4'>
              <div className='col-lg-9 col-12'>
                <h2>Work Inquiry</h2>
                <p>Let's Work together and i'll help you by all my best</p>
              </div>
              <div className='col-lg-3 col-6 my-auto pt-lg-auto pt-4'>
                <a href="" className='px-4 py-2 button n-button text-decoration-none' style={{ boxShadow: 'none' }}>Let's chat</a>
              </div>
            </div>
          </div>
        </Fade>
      </section>

      <section className='py-5 footer' >
        <div className='text-center'>
          <h2 className='mb-4'>Stay Connected</h2>
          <p className='m-0'>
            <small>Nanded,maharashtra</small>
          </p>
          <a href="mailto:mohammedasifkhan@gmail.com" className='colors text-decoration-none m-0' style={{ color: '#242d49', fontSize: '20px' }}>mohammedasifkhan@gmail.com</a>
          <p>(+91) 9075112963</p>
          <div className='d-flex flex-wrap justify-content-center pt-2 social' style={{ transform: 'scale(2)' }}>
            <div className='pe-4'><a href="https://github.com/AsifKhan50" className='colors' style={{ color: '#242d49' }}><BsGithub /></a></div>
            <div className='pe-4'><a href="https://www.instagram.com/_asif70/?next=%2F" className='colors' style={{ color: '#242d49' }}><BsInstagram /></a></div>
            <div className='pe-4'><a href="https://www.linkedin.com/in/mohammed-asif-khan-82160a236/" className='colors' style={{ color: '#242d49' }}><BsLinkedin /></a></div>
            <div><a href="https://www.facebook.com/profile.php?id=100008531980836" className='colors' style={{ color: '#242d49' }}><BsFacebook /></a></div>
          </div>

        </div>

      </section>



    </div>

  )
}

export default Info