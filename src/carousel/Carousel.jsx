import { useEffect, useState, Children, cloneElement } from 'react';
import './Carousel.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  const PAGE_WIDTH = 450; //450px per item
  const [offset, setOffset] = useState(0);

  const handleLeftArrowClick = () => {
    //console.log('left arrow click');
    setOffset((currentOffset) => {
      const newOffset = currentOffset + PAGE_WIDTH;
      //console.log(newOffset);
      return Math.min(newOffset, 0);
    });
  };
  const handleRightArrowClick = () => {
    //console.log('left right click');
    setOffset((currentOffset) => {
      const newOffset = currentOffset - PAGE_WIDTH;
      const maxOffset = -(PAGE_WIDTH * (pages.length - 1));
      //console.log(newOffset, maxOffset);
      return Math.max(newOffset, maxOffset);
    });
  };

  useEffect(() => {
    setPages(
      // cloning elements to add own css style
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
        <div
          className='all-pages-container'
          style={{
            transform: `translateX(${offset}px)`,
          }}>
          {pages}
        </div>
      </div>
      <FaChevronRight className='arrow' onClick={handleRightArrowClick} />
    </div>
  );
};
