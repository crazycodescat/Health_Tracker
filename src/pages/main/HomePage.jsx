import { useState } from 'react';

import IntroSlides from '../../components/IntroSlides';

const slidesData = {
  1: {
    title: 'Track Your Goal',
    desc: 'Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals',
    img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1712932919/healthTracker/yku572uvw6yomjhrtect.png',
  },
  2: {
    title: 'Get Burn',
    desc: 'Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever',
    img: 'https://res.cloudinary.com/ddx7todbr/image/upload/v1712932920/healthTracker/urftod2ksg0duuzgpmeu.png',
  },
};

const HomePage = () => {
  const [slide, setSlide] = useState(false);
  const nextSlideHandler = () => {
    setSlide(true);
  };

  return (
    <div className="px-4 py-4">
      {!slide && (
        <IntroSlides
          img={slidesData[1].img}
          title={slidesData[1].title}
          desc={slidesData[1].desc}
          nextSlideHandler={nextSlideHandler}
        />
      )}
      {slide && (
        <IntroSlides
          img={slidesData[2].img}
          title={slidesData[2].title}
          desc={slidesData[2].desc}
          nextSlideHandler={nextSlideHandler}
        ></IntroSlides>
      )}
    </div>
  );
};

export default HomePage;
