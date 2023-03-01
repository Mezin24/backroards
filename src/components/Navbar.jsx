import logo from '../assets/images/logo.svg';
import { pageLinks, seocialLinks } from '../data';

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
        <ul className='nav-links' id='nav-links'>
          {pageLinks.map(({ id, href, link }) => (
            <li key={id}>
              <a href={href} className='nav-link'>
                {' '}
                {link}{' '}
              </a>
            </li>
          ))}
        </ul>

        <ul className='nav-icons'>
          {seocialLinks.map(({ id, href, icon }) => (
            <li key={id}>
              <a href={href} target='_blank' className='nav-icon'>
                {icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
