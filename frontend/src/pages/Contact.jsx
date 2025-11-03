import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaEnvelope, FaGithub, FaLinkedin, FaLocationArrow, FaPaperPlane } from 'react-icons/fa'
import { Link } from 'react-router'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_0aka8w8','template_f48ynsd',form.current,'qY1bdUugHIlQRTuY6')
    .then(
      () => {
        alert('Message sent successfully!')
        e.target.reset()
      },
      (error) => {
        alert('Failed to send message: ' + error.text)
      }
    )
  }

  return (
    <div className='w-9/10 md:w-7/10 m-auto mt-48'>
      <h2 className="text-4xl font-bold text-center">Get in Touch</h2>
      <p className="w-full md:w-2/3 my-4 text-center mx-auto">
        Feel free to reach out anytime through any medium — I'm always happy to connect.
      </p>

      <div className="flex flex-col gap-8 md:flex-row justify-between my-8">
        
        {/* Left Section */}
        <div className="left w-full md:w-10/21">
          <h3 className="text-2xl font-bold mt-4">Contact Information</h3>
          <p className="w-full md:w-2/3 mt-2 mb-8 text-sm">
            Get an early response by sending a message using the form.
          </p>
          <div className="flex flex-col gap-6">
            <div>
              <p className="flex items-center gap-4 text-xl">
                <span className="text-blue-500"><FaEnvelope /></span>Email
              </p>
              <a href="mailto:kfaisalmahmud@gmail.com">kfaisalmahmud@gmail.com</a>
            </div>
            <div>
              <p className="text-xl flex items-center gap-3">
                <span className="text-blue-500"><FaLocationArrow /></span>Location
              </p>
              <p>Dhaka, Bangladesh</p>
            </div>
            <div>
              <p className="flex gap-3 items-center text-xl font-bold">Connect Me</p>
              <div className="flex gap-4 text-3xl">
                <Link to="https://github.com/mahmud-faisal"><FaGithub /></Link>
                <Link to="https://www.linkedin.com/in/kfmahmud/"><FaLinkedin /></Link>
                <a href="mailto:kfaisalmahmud@gmail.com"><FaEnvelope /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right w-full md:w-10/21">
          <h3 className="text-2xl font-bold mt-4 mx-12">Send Me a Message</h3>
          <p className="mx-12 mt-2 text-sm">Write me whatever is in your mind</p>

          <form ref={form} onSubmit={sendEmail} className="px-12 py-4 flex flex-col gap-4 rounded-2xl">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="from_name" required className='border rounded-lg p-2 w-full' placeholder='Enter your name' />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="reply_to" required className='border rounded-lg p-2 w-full' placeholder='example@mail.com' />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea name="message" rows={5} required className='border rounded-lg p-2 w-full' placeholder='Write me whatever in your mind'></textarea>
            </div>
            <button type="submit" className='bg-blue-950 w-[150px] py-2 px-4 rounded-2xl cursor-pointer text-white flex gap-3 items-center'>
              Submit <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
