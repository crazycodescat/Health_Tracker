/* eslint-disable react/prop-types */
import { GoChevronRight } from 'react-icons/go';

const IntroSlides = ({ img, title, desc, nextSlideHandler }) => {
  return (
    <div className="max-w-[375px] mx-auto flex flex-col gap-12">
      <div className="flex justify-end">
        <a
          href="/register"
          className="text-[#9FB2FF] font-medium text-lg underline"
        >
          Skip
        </a>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <img src={img} alt="" />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-lg">{title}</h3>
          <p className="font-medium text-sm text-[#787878]">{desc}</p>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => nextSlideHandler()}
          className="relative p-3 rounded-full bg-gradient-to-r from-[#DEE5FF] to-[#809AFF] "
        >
          <GoChevronRight className="text-white" fontSize="2rem" />
        </button>
      </div>
    </div>
  );
};

export default IntroSlides;

// before:w-[70px] before:h-[70px] before:absolute before:-top-2 before:-left-2 before:rounded-full before:border-t before:border-r before:border-solid before:border-[#89a1ff] before:ring-[#89a1ff] before:-z-10
