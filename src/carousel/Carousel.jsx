import './Carousel.css';

export const Carousel = ({ children }) => {
  return (
    <div className='main-container'>
      <div className='window'>
        <div className='all-pages-container'>{children}</div>
      </div>
    </div>
  );
};
