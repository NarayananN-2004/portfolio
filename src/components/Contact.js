import { 
  FaFacebook, FaWhatsapp, 
  FaYoutube, FaTelegram, FaLinkedin, FaGithub 
} from 'react-icons/fa';

import { FaXTwitter } from 'react-icons/fa6'; // X (formerly Twitter)
import './Contact.css'; // ← add this at the top of Contact.js
function SocialLinks() {
  return (
    <div className="social-icons">
      <a href="https://www.linkedin.com/in/narayanan-n-09a807374?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer">
        <FaLinkedin size={40} />
      </a>
        <a href="https://github.com/NarayananN-2004" target="_blank" rel="noreferrer">
          <FaGithub size={40} />
        </a>
    </div>
  );
}

const Contact = () => {
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <h1>for any project</h1>
            <SocialLinks />
            
           
        </div>
    );
};

export default Contact;