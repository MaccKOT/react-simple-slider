import { useEffect, useState, Children, cloneElement } from 'react';
import './Carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const PAGE_WIDTH = 450; //450px per item

  const handleLeftArrowClick = () => {
    console.log('left arrow click');
  };
  const handleRightArrowClick = () => {
    console.log('left right click');
  };

  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${PAGE_WIDTH}px`,
            maxWidth: `${PAGE_WIDTH}px`,
          },
        });
      })
    );
  }, []);

  return (
    <div className='main-container'>
      <FaChevronLeft className='arrow' onClick={handleLeftArrowClick} />
      <div className='window'>
        <div className='all-pages-container'>{pages}</div>
      </div>
      <FaChevronRight className='arrow' onClick={handleRightArrowClick} />
    </div>
  );
};
