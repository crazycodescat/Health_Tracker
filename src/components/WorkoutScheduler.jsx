import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { FiAlertTriangle } from 'react-icons/fi';
import { motion } from 'framer-motion';

import NavBar from '../components/NavBar';
import { duration } from '@mui/material';

const WorkoutScheduler = () => {
  return (
    <div className="max-w-[375px] mx-auto relative">
      <div className="px-4 pb-28 relative ">
        {/* Add new Workout */}
        <div className="z-10 fixed bottom-[150px] right-4 shadow-[#00000034] shadow-lg rounded-full">
          <button className="bg-gradient-to-r from-[#E9B1E0] to-[#D3A5F2] text-white text-5xl w-16 h-16 rounded-full">
            +
          </button>
        </div>
        <div className="flex items-center gap-6 mt-12">
          <div className="flex items-center rounded-md bg-[#F1F1F1] p-2 cursor-pointer">
            <FaChevronLeft />
          </div>
          <p className="font-semibold text-xl  text-[#2C2B2B]">
            Workout Schedule
          </p>
        </div>

        <div className="flex items-center justify-center mt-[14px]">
          <div>
            <FaChevronLeft className="text-[#2C2B2B]" />
          </div>
          <div>
            <p className="font-semibold text-[12px]">Feb 2024</p>
          </div>
          <div>
            <FaChevronRight className="text-[#2C2B2B]" />
          </div>
        </div>

        <div className="flex gap-2 text-white mt-4">
          <div className="flex flex-col items-center justify-start w-16 h-[80px] rounded-xl py-2 text-[#454545]">
            <h3 className="text-xs font-semibold text-center">Sun</h3>
            <p className="text-2xl font-semibold font-[quicksand]">5</p>
          </div>
          <div className="flex flex-col items-center justify-start w-16 h-[80px] bg-gradient-to-r from-[#D1DBFF] to-[#8DA4FF] rounded-xl py-2 text-white">
            <h3 className="text-xs font-semibold text-center">Mon</h3>
            <p className="text-2xl font-semibold font-[quicksand]">6</p>
          </div>
          <div className="flex flex-col items-center justify-start w-16 h-[80px] rounded-xl py-2 text-[#454545]">
            <h3 className="text-xs font-semibold text-center">Tue</h3>
            <p className="text-2xl font-semibold font-[quicksand]">7</p>
          </div>
          <div className="flex flex-col items-center justify-start w-16 h-[80px] rounded-xl py-2 text-[#454545]">
            <h3 className="text-xs font-semibold text-center">Wed</h3>
            <p className="text-2xl font-semibold font-[quicksand]">8</p>
          </div>
          <div className="flex flex-col items-center justify-start w-16 h-[80px] rounded-xl py-2 text-[#454545]">
            <h3 className="text-xs font-semibold text-center">Thu</h3>
            <p className="text-2xl font-semibold font-[quicksand]">9</p>
          </div>
        </div>

        <div className="absolute w-full left-0 divide-solid divide-y-[1px] divide-[#7F7F7F] mt-4">
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            06:00 AM
          </p>
          <div className="relative">
            <p className="p-4 text-[12px] font-[montserrat] font-semibold">
              07:00 AM
            </p>
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="absolute -bottom-[20px] right-4 rounded-full p-2 px-3 bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] text-white z-10"
            >
              <motion.p
                variants={listItem}
                initial="hidden"
                animate="show"
                className="font-semibold text-xs"
              >
                Ab workout, 7:30am
              </motion.p>
            </motion.div>
          </div>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            08:00 AM
          </p>
          <div className="relative">
            <p className="p-4 text-[12px] font-[montserrat] font-semibold">
              09:00 AM
            </p>
            <div className="absolute bottom-[6px] right-20 rounded-full p-2 px-3 bg-gradient-to-r from-[#D3A4F4] to-[#E9B1E0] text-white">
              <p className="font-semibold text-xs">Upperbody Workout, 9am</p>
            </div>
          </div>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            10:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            11:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            12:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            01:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            02:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            03:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            04:00 AM
          </p>
          <p className="p-4 text-[12px] font-[montserrat] font-semibold">
            05:00 AM
          </p>
        </div>
      </div>

      <NavBar />
    </div>
  );
};

export default WorkoutScheduler;

const container = {
  hidden: { x: -100, y: 450, opacity: 0, width: '200px' },
  show: {
    x: 0,
    y: 0,
    width: '150px',
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
      type: '',
    },
  },
};

const listItem = {
  hidden: { y: -20, opacity: 1 },
  show: { y: 0, opacity: 1, transition: { delay: 0.4 } },
};
