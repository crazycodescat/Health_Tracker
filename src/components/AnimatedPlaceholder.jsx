/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';

const AnimatedPlaceholder = ({ text }) => {
  const letters = text.split('');

  return (
    <>
      <div className="pl-4">
        {letters.map((letter, index) => (
          <div key={index} className="inline-block">
            <motion.span
              key={index}
              initial={{ y: 200, opacity: 1 }}
              whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                  ease: 'easeIn',
                  duration: 0.1,
                  stiffness: 50,
                  type: 'spring',
                },
              }}
              className="text-[#9ca3af] font-[montserrat] font-semibold text-xs outline-none inline-block"
            >
              {letter}
            </motion.span>
          </div>
        ))}
      </div>
    </>
  );
};

const Input = ({ placeholder }) => {
  return (
    <div>
      <AnimatedPlaceholder text={placeholder} />
    </div>
  );
};

export default Input;
