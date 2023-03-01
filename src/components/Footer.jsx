import PageLinks from './UI/PageLinks';
import SocialLinks from './UI/SocialLinks';

const Footer = () => {
  return (
    <footer className='section footer'>
      <PageLinks parentClass='footer-links' innerClass='footer-link' />
      <SocialLinks parentClass='footer-icons' innerClass='footer-icon' />
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'></span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
