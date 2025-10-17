import React from "react";
import ReactTypingEffect from "react-typing-effect";

import Tilt from 'react-parallax-tilt'
import profileImage from '../../assets/profile2.png'
const About = () => {
  return (
    <section
      id="about"
      className="pt-24 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            Hi,I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Sidharth Sankar
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span> 
            <ReactTypingEffect
              text={[" Fullstack Developer", " Python Developer", " Coder"]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor)=>(
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 loading-relaxed">
            "I am S. Sidharth Sankar, a Computer Science and Engineering fresher with a strong interest in full-stack development. My technical skills include HTML, CSS, JavaScript, React.js, Python, SQL, and MongoDB. I have developed projects like an E-commerce website, a Weather Info app, and a News App that showcase my ability to create responsive and dynamic applications. I enjoy building user-friendly interfaces and writing efficient backend logic. With a balance of creativity and problem-solving, I strive to deliver practical and impactful web solutions. I am eager to grow as a developer and take on challenging opportunities to apply my skills in real-world projects."
          </p>

          <a href="https://drive.google.com/file/d/1E3Jyy5uhrPeHrdVYB9YQnHkJUw6vwvo7/view?usp=drive_link"
          target="_blank"
          rel='noopener noreferrer'
           className=" inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 trasnform hover:scale-105"
           style={{
            background:'linear-gradient(90deg, #8245ec, #a855f7)',
            boxShadow:"0 0 2px #8245ec ,0 0 2px #8245ec ,0 0 40px #8245ec"
           }}
          >Download CV</a>
        </div>
        <div className="md:w-1/2 flex justify-center md:justify-end">
<Tilt className="w-48 h-48 sm:w-64 md:h-[30rem] md:w-[30rem] border-4 border-purple-700 rounded-full
tiltMaxAngleX={20}
tiltMaxAngleY={20}
perspective={20}
scale={1.05}
transitionSpeed={1000}
gyroscope={true}

">  
          <img src={profileImage} alt="Sidhath Sankar" className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]" />

</Tilt>

        
        </div>
      </div>
    </section>
  );
};

export default About;
