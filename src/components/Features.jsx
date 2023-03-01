import { tours } from '../data';
import SectionTitle from './UI/SectionTitle';

const Features = () => {
  return (
    <section className='section' id='tours'>
      <SectionTitle title='featured' subtitle='tours' />

      <div className='section-center featured-center'>
        {tours.map((tour) => {
          const {
            id,
            img,
            date,
            title,
            description,
            location,
            duration,
            price,
          } = tour;

          return (
            <article key={id} className='tour-card'>
              <div className='tour-img-container'>
                <img src={img} className='tour-img' alt='' />
                <p className='tour-date'>{date}</p>
              </div>
              <div className='tour-info'>
                <div className='tour-title'>
                  <h4>{title}</h4>
                </div>
                <p>{description}</p>
                <div className='tour-footer'>
                  <p>
                    <span>
                      <i className='fas fa-map'></i>
                    </span>{' '}
                    {location}
                  </p>
                  <p>{duration} days</p>
                  <p>from ${price}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Features;
