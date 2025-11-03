import React from 'react'
import { assets } from '../../assets/front_images/assets'
const Development = () => {
  return (
    <div className="p-8 rounded-lg shadow-lg bg-gray-50 hover:shadow-2xl transition-shadow duration-300">
    <h3 className="text-2xl font-semibold mb-4 text-green-600">💻 Development Skills</h3>
    <p className="text-gray-700 leading-relaxed">
      Alongside programming, I’m passionate about web development — from designing clean UIs
      to building full-stack applications using modern technologies.
    </p>

    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { name: "React.js", img: assets.react, desc: "Frontend Framework", level: "Advanced", color: "text-green-600", link: "https://react.dev/" },
        { name: "Node.js", img: assets.node, desc: "Backend Runtime", level: "Intermediate", color: "text-green-600", link: "https://nodejs.org/" },
        { name: "Express.js", img: assets.express, desc: "Server Framework", level: "Intermediate", color: "text-green-600", link: "https://expressjs.com/" },
        { name: "MongoDB", img: assets.mongodb, desc: "Database", level: "Intermediate", color: "text-green-600", link: "https://www.mongodb.com/" },
        { name: "Vite", img: assets.vite, desc: "Build Tool", level: "Advanced", color: "text-green-600", link: "https://vitejs.dev/" },
        { name: "Tailwind CSS", img: assets.tailwind, desc: "Styling Framework", level: "Advanced", color: "text-green-600", link: "https://tailwindcss.com/" },
        { name: "Git & GitHub", img: assets.github, desc: "Version Control", level: "Advanced", color: "text-green-600", link: "https://github.com/" },
        { name: "Next.js", img: assets.nextjs, desc: "Fullstack Framework", level: "Basic", color: "text-green-600", link: "https://nextjs.org/" },
      ].map((tech) => (
        <a
          key={tech.name}
          href={tech.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-4 bg-white rounded-md shadow hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <img src={tech.img} alt={tech.name} className="w-12 h-12 mb-2" />
          <h4 className="font-semibold text-gray-800">{tech.name}</h4>
          <p className="text-gray-600 text-sm">{tech.desc}</p>
          <p className={`${tech.color} text-sm font-medium`}>{tech.level}</p>
        </a>
      ))}
    </div>
  </div>
  )
}

export default Development