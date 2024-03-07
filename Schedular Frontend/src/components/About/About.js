import React from 'react';
import About1 from './About.css'
import image from "./1.png";
import 'font-awesome/css/font-awesome.min.css';



const TeamMember = ({ name, title, description }) => (
  <div className="col-sm-6 col-lg-3 mt-3 mb-3" >
    <div className="box shadow-sm p-4 "style={{backgroundColor:"#E3EDE8"}} >
      <div className="image-wrapper mb-3">
        {/* Assuming you have an image URL in your team data, otherwise replace {image} with the correct image URL */}
        <img className="img-fluid" src={image} alt="..." />
      </div>
      <div className="box-desc ">
        <h5>{name}</h5>
        <p>{title}</p>
        <p>{description}</p>
      </div>
      <ul className="social">
        <li>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-github"></i>
          </a>
        </li>
        <li>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-instagram"></i>
          </a>
        </li>
        <li>
          <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button">
            <i className="bi bi-twitter-x"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const About = () => {
  const team = [
    {
      name: 'Amey Kohle',
      title: 'Developer',
      description: 'Currently Persuing PG-DAC in Development in Advance Computing at CDAC-ACTS Electronic City Bengaluru. I have Completed B.tech In Mechanical Engineering from...........',
      // img: {image}
    },
    {
      name: 'Rohit Kumar Sharma',
      title: 'Developer',
       description: 'Currently Persuing PG-DAC in Development in Advance Computing at CDAC-ACTS Electronic City Bengaluru. I have Completed .......................',
      // Add image URL here if available
    },
    {
      name: 'Nitesh Kumar Kannaujiya',
      title: 'Developer',
      description: 'Currently Persuing PG-DAC in Development in Advance Computing at CDAC-ACTS Electronic City Bengaluru. I have Completed B.tech In Computer Science and Engineering from Dr. RLU Ayodhya UP',
      // Add image URL here if available
    },
    {
      name: 'Himanshu Tambuskar',
      title: 'Developer',
      description: 'Currently Persuing PG-DAC in Development in Advance Computing at CDAC-ACTS Electronic City Bengaluru. I have Completed B.tech In Mechanical Engineering from...........',
      // Add image URL here if available
    },
  ];

  return (
    <div className='m-0' style={{backgroundColor:"#a5ccb0"}} >
    <div className="container" >
      <div className="row my-4">
        <div>

          <div className='intro p-3 m-3 border rounded text-white'>
          <h1 className='text-center'>Our Team</h1>
          We as a team comprises talented individuals dedicated to driving innovation and excellence in everything we do.
          With a diverse range of skills and expertise, we come together to tackle challenges and deliver exceptional results. 
          Each member brings unique perspectives and experiences to the table, enriching our collaborative environment and fostering creativity.
          </div>
  
        </div>
        {team.map((member, index) => (
          <TeamMember
            key={index} // Use index as key if no unique identifier available
            name={member.name}
            title={member.title}
            description={member.description}
          />
        ))}
      </div>
    </div>
    </div>
  );
};

export default About;
