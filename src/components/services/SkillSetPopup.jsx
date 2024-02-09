// SkillSetPopup.jsx

import React, { useEffect } from 'react';
import './SkillSetPopup.scss';

// Import icons for skills (you can replace these with actual icons)
import HtmlIcon from '/html.png';
import CssIcon from '/css-icon.png';
import JavascriptIcon from '/javascript.png';
import ReactIcon from '/react.png';
import WordpressIcon from '/wordpress.png';
import TailwindcssIcon from '/tailwindcss.png';
import BootstrapIcon from '/bootstrap.png';
import FigmaIcon from '/figma.png';
import BalsamiqIcon from '/balsamiq.png';
import AzureIcon from '/azure.png';
import GoogleCloudIcon from '/googleCloud.png';
import PythonIcon from '/python.png';

const SkillSetPopup = ({ onClose }) => {
  const skillsWithIcons = [
    { name: 'HTML', icon: HtmlIcon },
    { name: 'CSS', icon: CssIcon },
    { name: 'JavaScript', icon: JavascriptIcon },
    { name: 'ReactJS', icon: ReactIcon },
    { name: 'Wordpress', icon: WordpressIcon },
    { name: 'Tailwindcss', icon: TailwindcssIcon },
    { name: 'Bootstrap', icon: BootstrapIcon },
    { name: 'Figma', icon: FigmaIcon },
    { name: 'Balsamiq', icon: BalsamiqIcon },
    { name: 'Azure', icon: AzureIcon },
    { name: 'GoogleCloud', icon: GoogleCloudIcon },
    { name: 'Python', icon: PythonIcon },
    // ... (add other skills with icons)
  ];

  useEffect(() => {
    // Add event listener for scroll
    const handleScroll = () => {
      onClose();
    };


    // Add the event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onClose]);

  

  return (
    <div className="skill-set-popup">
      <div className="popup-content">
        <h2>My Skills</h2>
        <div className="skills-container">
          {skillsWithIcons.map((skill) => (
            <div key={skill.name} className="skill-item">
              <img src={skill.icon} alt={`${skill.name} Icon`} />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSetPopup;