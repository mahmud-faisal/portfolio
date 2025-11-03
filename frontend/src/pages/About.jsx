import React from 'react'
import { assets } from '../assets/front_images/assets'
import Intro from '../components/about/Intro'
import Competitive from '../components/about/Competitive'
import Development from '../components/about/Development'
import Education from '../components/about/Education'
import Achievement from '../components/about/Achievement'

const About = () => {
  return (
    <div className="w-9/10 mx-auto my-32">
      {/*  ABOUT ME SECTION  */}
      <Intro />

      {/* Education */}
      <Education />

      {/* CAREER & SKILLS SECTION */}
      <section className="mt-32 w-9/10 mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 font-mono">Career & Skills</h2>

        <div className="grid md:grid-cols-2 gap-16 text-left">
          {/* Competitive Programming */}
       <Competitive />

      {/* 💻 Development Skills */}
          <Development />

        </div>
      </section>

    {/* Achievement */}
    <Achievement />

    </div>
  )
}

export default About
