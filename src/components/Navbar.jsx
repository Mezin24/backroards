import logo from '../assets/images/logo.svg';
import PageLinks from './UI/PageLinks';
import SocialLinks from './UI/SocialLinks';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='backroads' />
          <button type='button' className='nav-toggle' id='nav-toggle'>
            <i className='fas fa-bars'></i>
          </button>
        </div>
        <PageLinks innerClass='nav-link' parentClass='nav-links' />
        <SocialLinks parentClass='nav-icons' innerClass='nav-icon' />
      </div>
    </nav>
  );
};

export default Navbar;
