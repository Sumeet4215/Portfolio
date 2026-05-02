import { useState } from 'react'
import icon from "./assets/gh.png";
import logo from "./assets/insta.png"
import sym from "./assets/ln.png"
import react from "./assets/react.svg"
import c from "./assets/c.png"
import py from "./assets/py.png"
import java from "./assets/java.png"
import html from "./assets/html.png"
import css from "./assets/css.png"


const Menu = () => {
  return(
  <div id ="menu" className= {'text-blue-300 font-bold top-5 left-5 flex flex-col place-items-start gap-7 py-12 fixed text-[25px] z=50'}>
    <button onClick = {() => document.getElementById("home")?.scrollIntoView({behavior : 'smooth'})} className='hover:translate-y-[-3px] rounded-full px-8 py-2 hover:bg-blue-300 hover:text-blue-500'>Home</button>
    <button onClick = {() => document.getElementById("about")?.scrollIntoView({behavior : 'smooth'})} className='hover:translate-y-[-3px] rounded-full px-8 py-2 hover:bg-blue-300 hover:text-blue-500'>About Me</button>
    <button onClick = {() => document.getElementById("work")?.scrollIntoView({behavior : 'smooth'})} className='hover:translate-y-[-3px] rounded-full px-8 py-2 hover:bg-blue-300 hover:text-blue-500'>Languages</button>
     <button onClick = {() => document.getElementById("project")?.scrollIntoView({behavior : 'smooth'})} className='hover:translate-y-[-3px] rounded-full px-8 py-2 hover:bg-blue-300 hover:text-blue-500'>Projects</button>
    <button onClick = {() => document.getElementById("contact")?.scrollIntoView({behavior : 'smooth'})} className='hover:translate-y-[-3px] rounded-full px-8 py-2 hover:bg-blue-300 hover:text-blue-500'>Contact Me</button>
  </div>
  )
}
const App = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
  <div 
  className='min-h-screen bg-[#291e3e] [background:radial-gradient(rgba(40,50,230,0.2)_0%,transparent_90%),#110e0e] text-white relative flex flex-col items-center justify-center overflow-hidden font-[Outfit]'>
    <div id="home" 
    className= 'h-screen flex flex-col items-center justify-center'>
      
      <h1 className='text-blue-500 text-[80px] 
        [text-shadow:0_0_10px_rgba(0,0,230,0.9)] 
        font-bold'>
        Sumeet Haswani
      </h1>

      <p className='text-blue-300 font-bold mt-2'>
        Student | Computer Engineer 
      </p>
      <div className='flex flex-row gap-4 py-2'>
      <button onClick ={() => window.open("https://github.com/Sumeet4215"," ")} 
      className='size-8 py-2 hover:translate-y-[-3px]'>
        <img src = {icon} alt = "gh"></img>
      </button>
        <button onClick ={() => window.open("https://www.linkedin.com/in/sumeet-haswani-a5229432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"," ")} className='size-8 py-2 hover:translate-y-[-3px]'>
        <img src = {sym} alt = "ln"></img>
      </button>
        <button onClick ={() => window.open("https://www.instagram.com/_sumeet4215?igsh=NzhpNW01bXgyamMw"," ")} className='size-8 py-2 hover:translate-y-[-3px]'>
        <img src = {logo} alt = "insta"></img>
      </button>
      </div>
      
    </div>
    <a href  = "/resume.pdf" download>
      <button className='px-10 py-4 rounded-full text-large  flex flex-row my-[-175px] font-bold text-blue-300 bg-black hover:bg-slate-900 hover:translate-y-[-3px]'>
        Resume
      </button>
      </a>
    <div className='absolute top-5 left-5'>
      <button onClick = {() => setShowMenu(!showMenu)}className='flex flex-col justify-left items-left gap-1 my-[-10px] py-4 cursor-pointer fixed z-50 hover:translate-y-[-3px]'>
        <span className='block w-6 h-[2px] bg-blue-500'></span>
        <span className='block w-6 h-[2px] bg-blue-500'></span>
        <span className='block w-6 h-[2px] bg-blue-500'></span>
      </button>
       {showMenu && <Menu />}
    </div>
     <div id="about" className=' h-screen flex flex-col items-center justify-center'>
      
      <h1 className='text-blue-500 text-5xl 
        [text-shadow:0_0_10px_rgba(0,0,230,0.9)] 
        font-bold'>
        About Me
      </h1>

      <p className='text-blue-300 text-lg font-bold mt-2 max-w-2xl py-12'>
        I am a Computer Science student with a strong interest in web development and artificial intelligence. I enjoy building clean, responsive, and user-friendly applications that provide a smooth user experience.

I have a good foundation in programming languages like C++, Java, and Python, and I am currently exploring front-end technologies such as HTML, CSS, JavaScript, and React. I like turning ideas into real projects and continuously improving my skills through practice.

I am passionate about learning new technologies and solving problems, and my goal is to create impactful digital solutions while growing as a skilled developer.

      </p>
    </div>
      <div id="work" className='h-screen flex flex-col items-center justify-center'>
      
      <h1 className='text-blue-500 text-5xl 
        [text-shadow:0_0_10px_rgba(0,0,230,0.9)] 
        font-bold'>
        Languages
      </h1>
<div className="grid grid-cols-3 my-[1px] place-items-center">
  <img src={c} className="w-20 h-20 object-contain hover:scale-110 cursor-pointer" />
  <img src={java} className="w-30 h-30 object-contain hover:scale-110 cursor-pointer" />
  <img src={py} className="w-20 h-20 object-contain hover:scale-110 cursor-pointer" />
  <img src={html} className="w-20 h-20 object-contain hover:scale-110 cursor-pointer" />
  <img src={css} className="w-20 h-20 object-contain hover:scale-110 cursor-pointer" />
  <img src={react} className="w-20 h-20 object-contain hover:scale-110 cursor-pointer" />
</div>
        </div>
<div id="project" className="min-h-screen flex flex-col items-center justify-center">

  <h1 className="text-blue-500 text-5xl 
    [text-shadow:0_0_10px_rgba(0,0,230,0.9)] font-bold mb-10">
    Projects
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-72 shadow-lg 
    hover:scale-105 hover:shadow-2xl transition duration-300">

      <h2 className="text-xl font-bold text-blue-400">
        Password Generator
      </h2>

      <ul className="text-sm mt-3 space-y-1 text-gray-300">
        <li>🔐 Generates secure passwords</li>
        <li>⚙️ Custom length & complexity</li>
        <li>🧠 Focus on logic & string handling</li>
      </ul>

      <p className="text-xs mt-3 text-blue-300">
        Python • Logic Building
      </p>
    </div>
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-72 shadow-lg 
    hover:scale-105 hover:shadow-2xl transition duration-300">

      <h2 className="text-xl font-bold text-blue-400">
        Number Guessing Game
      </h2>

      <ul className="text-sm mt-3 space-y-1 text-gray-300">
        <li>🎯 Interactive guessing game</li>
        <li>🔁 Feedback: high / low hints</li>
        <li>🧠 Uses loops & conditions</li>
      </ul>

      <p className="text-xs mt-3 text-blue-300">
        Python • Game Logic
      </p>
    </div>
    <div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-72 shadow-lg 
    hover:scale-105 hover:shadow-2xl transition duration-300">

      <h2 className="text-xl font-bold text-blue-400">
        Grade Tracker
      </h2>

      <ul className="text-sm mt-3 space-y-1 text-gray-300">
        <li>📊 Tracks student grades</li>
        <li>📈 Displays performance results</li>
        <li>🧠 Uses lists & functions</li>
      </ul>

      <p className="text-xs mt-3 text-blue-300">
        Python • Data Handling
      </p>
    </div>
<div className="bg-white/10 backdrop-blur-md p-5 rounded-xl w-72 shadow-lg 
hover:scale-105 hover:shadow-2xl transition duration-300">

  <h2 className="text-xl font-bold text-blue-400">
    Portfolio Website
  </h2>

  <ul className="text-sm mt-3 space-y-1 text-gray-300">
    <li>🌐 Personal portfolio to showcase skills & projects</li>
    <li>⚛️ Built using React and Tailwind CSS</li>
    <li>🎨 Responsive design with smooth animations</li>
  </ul>

  <p className="text-xs mt-3 text-blue-300">
    React • Tailwind • Frontend
  </p>
</div>

  </div>
</div>
    <div id="contact" className=' h-screen flex flex-col items-center justify-center'>
      
      <h1 className='text-blue-500 text-5xl 
        [text-shadow:0_0_10px_rgba(0,0,230,0.9)] 
        font-bold gap-4'>
        Contact 
      </h1>

      <p className='text-blue-300 font-bold mt-2 text-lg max-w-2xl py-12'>
        <button onClick={() => window.location.href = "mailto:sumeethaswani94@gmail.com"} className='flex flex-col gap-4'>{" "}Gmail: sumeethaswani94@gmail.com</button>
        <button onClick={() => window.location.href = "tel:+917757968667"} className=''>contact: +91 77579 68667</button>
      </p>
      <div className='flex flex-row gap-4 py-2'>
      <button onClick ={() => window.open("https://github.com/Sumeet4215"," ")} 
      className='size-8 py-2 hover:translate-y-[-3px]'>
        <img src = {icon} alt = "gh"></img>
      </button>
        <button onClick ={() => window.open("https://www.linkedin.com/in/sumeet-haswani-a5229432a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"," ")} className='size-8 py-2 hover:translate-y-[-3px]'>
        <img src = {sym} alt = "ln"></img>
      </button>
        <button onClick ={() => window.open("https://www.instagram.com/_sumeet4215?igsh=NzhpNW01bXgyamMw"," ")} className='size-8 py-2 hover:translate-y-[-3px]'>
        <img src = {logo} alt = "insta"></img>
      </button>
      </div>
      </div>
    </div>
  )
}

export default App