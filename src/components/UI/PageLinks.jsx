import { pageLinks } from '../../data';

const PageLinks = ({ parentClass, innerClass }) => {
  return (
    <ul className={parentClass}>
      {pageLinks.map(({ id, href, link }) => (
        <li key={id}>
          <a href={href} className={innerClass}>
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default PageLinks;
