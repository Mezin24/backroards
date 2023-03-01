import { socialLinks } from '../../data';

const SocialLinks = ({ parentClass, innerClass }) => {
  return (
    <ul className={parentClass}>
      {socialLinks.map(({ id, href, icon }) => (
        <li key={id}>
          <a href={href} target='_blank' className={innerClass}>
            {icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
