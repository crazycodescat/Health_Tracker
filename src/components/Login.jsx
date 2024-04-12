import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Input from './AnimatedPlaceholder';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { LuEyeOff } from 'react-icons/lu';
import { useState } from 'react';

const Login = () => {
  const [hiddenEmail, setEmailHidden] = useState(false);
  const [hiddenPassword, setPasswordHidden] = useState(false);

  const emailVisibiltyHandler = () => {
    setEmailHidden(true);
  };

  const passwordVisibilityHandler = () => {
    setPasswordHidden(true);
  };

  return (
    <div className="max-w-[375px] mx-auto flex flex-col justify-between h-screen font-[roboto] pt-12 pb-4 px-4">
      <div className="">
        <div className="mb-11">
          <h2 className="font-semibold text-xl">Welcome Back</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div className="relative flex gap-4 items-center">
            <input
              onChange={() => emailVisibiltyHandler()}
              type="text"
              className="bg-[#F1F1F1] font-[montserrat] font-semibold placeholder:text-xs p-4 w-full rounded-xl outline-none"
            />
            {!hiddenEmail && (
              <div className="absolute z-10 ">
                <Input placeholder="Email" />
              </div>
            )}
          </div>
          <div className="relative flex gap-4 pr-4 flex-shrink-0 items-center bg-[#F1F1F1] rounded-xl">
            <input
              onChange={() => passwordVisibilityHandler()}
              type="text"
              className="bg-[#F1F1F1] font-[montserrat] p-4 pr-0  font-semibold placeholder:text-xs  w-full rounded-xl outline-none"
            />
            <LuEyeOff />
            {!hiddenPassword && (
              <div className="absolute z-10">
                <Input placeholder="Password" />
              </div>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.5 } }}
          className="flex gap-2 mt-4"
        >
          <a className="underline font-[montserrat] font-medium text-xs text-[#7F7F7F]">
            Forgot your password?
          </a>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 font-[montserrat]">
        <div>
          <button
            type="submit"
            className="bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] h-[50px] text-center w-full text-white rounded-lg"
          >
            Sign In
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <hr className="w-full border-[#7F7F7F]" />
          <span className="font-[montserrat]">Or</span>
          <hr className="w-full border-[#7F7F7F]" />
        </div>
        <div className="flex justify-center gap-[18px]">
          <div className="p-4 border border-solid border-[#7F7F7F] rounded-[8px]">
            <FcGoogle />
          </div>
          <div className="p-4 border border-solid border-[#7F7F7F] rounded-[8px]">
            <FaFacebookF className="text-[#1A7AEB]" />
          </div>
        </div>
        <div>
          <p className="text-center font-normal text-xs">
            Don’t have an account yet?
            <Link to="/register">
              <span className="underline text-[#819CFF]">
                Create an account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
