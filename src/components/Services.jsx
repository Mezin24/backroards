import SectionTitle from './UI/SectionTitle';
import { services } from '../data';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <SectionTitle title='our' subtitle='services' />
      <div className='section-center services-center'>
        {services.map(({ id, icon, title, text }) => (
          <article key={id} className='service'>
            <span className='service-icon'>{icon}</span>
            <div className='service-info'>
              <h4 className='service-title'>{title}</h4>
              <p className='service-text'>{text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
export default Services;
