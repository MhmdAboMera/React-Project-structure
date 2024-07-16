import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaLinkedin,  FaWhatsappSquare, FaYoutube } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'

const SocialIcons = () => (
  <div className="d-flex gap-2 social_icon justify-content-center">
    <Link to="https://wa.me/your-number" className="whats" aria-label="whatsapp"><FaWhatsappSquare /></Link>
    <Link to="https://www.facebook.com/your-profile" className="facebook" aria-label="facebook"><FaFacebook /></Link>
    <Link to="https://www.instagram.com/your-profile" className="insta" aria-label="instagram"><FaInstagramSquare /></Link>
    <Link to="https://www.youtube.com/your-channel" className="youtube" aria-label="youtube"><FaYoutube /></Link>
    <Link to="https://www.linkedin.com/in/your-profile" className="linkedin" aria-label="linkedin"><FaLinkedin /></Link>
    <Link to="https://twitter.com/your-profile" className="twitter" aria-label="twitter"><FaSquareXTwitter /></Link>
  </div>
);

export default SocialIcons;
