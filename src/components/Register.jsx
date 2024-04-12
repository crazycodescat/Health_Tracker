import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Register = () => {
  const [show, setShow] = useState(false);
  const goalsVisibilityHandler = () => {
    setShow(true);
  };
  const navigate = useNavigate();
  return (
    <>
      {!show && (
        <div className="max-w-[375px] mx-auto flex flex-col justify-between h-screen font-[roboto] pt-12 pb-4 px-4">
          <div className="">
            <div className="mb-11">
              <h2 className="font-semibold text-xl">Create an account</h2>
            </div>
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#F1F1F1] font-[montserrat] font-semibold placeholder:text-xs p-4 w-full rounded-xl outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#F1F1F1] font-[montserrat] font-semibold placeholder:text-xs p-4 w-full rounded-xl outline-none"
              />
              <input
                type="text"
                placeholder="Email"
                className="bg-[#F1F1F1] font-[montserrat] font-semibold placeholder:text-xs p-4 w-full rounded-xl outline-none"
              />
              <input
                type="text"
                placeholder="Password"
                className="bg-[#F1F1F1] font-[montserrat] font-semibold placeholder:text-xs p-4 w-full rounded-xl outline-none"
              />
            </div>
            <div className="flex gap-2 mt-6 cursor-pointer">
              <input
                type="checkbox"
                id="privacyPolicy"
                className="w-4 checked:accent-[#eb1754]"
              />
              <label htmlFor="privacyPolicy" className="cursor-pointer">
                <p className="font-[montserrat] font-medium text-xs text-[#7F7F7F]">
                  By Proceeding, I agree to all &nbsp;
                  <span className="text-[#93A9FF]">T&C</span> and &nbsp;
                  <span className="text-[#93A9FF]">Privacy Policy</span>
                </p>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-8 font-[montserrat]">
            <div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] h-[50px] text-center w-full text-white rounded-lg"
                onClick={() => goalsVisibilityHandler()}
              >
                Create an Account
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
                Already have an account?
                <Link to="/login">
                  <span className="underline text-[#819CFF]">Login</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
      {show && (
        <div className="px-4 max-w-[375px] mx-auto">
          <div className="mt-10 text-center">
            <h2 className="font-semibold text-xl">What are your goals?</h2>
          </div>

          {/* Goals List */}
          <div className="flex flex-col gap-4 mt-11">
            <div className="flex items-center px-4 justify-between bg-[#F1F1F1] h-[50px] rounded-xl">
              <p className="font-semibold text-xs text-[#2C2B2B]">
                Weight Loss
              </p>
              <input
                type="checkbox"
                className="cursor-pointer checked:accent-[#eb1754] outline-none w-5 h-5"
              />
            </div>
            <div className="flex items-center px-4 justify-between bg-[#F1F1F1] h-[50px] rounded-xl">
              <p className="font-semibold text-xs text-[#2C2B2B]">
                Muscle Gain
              </p>
              <input
                type="checkbox"
                className="cursor-pointer checked:accent-[#eb1754] outline-none w-5 h-5"
              />
            </div>
            <div className="flex items-center px-4 justify-between bg-[#F1F1F1] h-[50px] rounded-xl">
              <p className="font-semibold text-xs text-[#2C2B2B]">
                Flexibility and Mobility
              </p>
              <input
                type="checkbox"
                className="cursor-pointer checked:accent-[#eb1754] outline-none w-5 h-5"
              />
            </div>
            <div className="flex items-center px-4 justify-between bg-[#F1F1F1] h-[50px] rounded-xl">
              <p className="font-semibold text-xs text-[#2C2B2B]">
                General Fitness
              </p>
              <input
                type="checkbox"
                className="cursor-pointer checked:accent-[#eb1754] outline-none w-5 h-5"
              />
            </div>
            <div className="flex items-center px-4 justify-between bg-[#F1F1F1] h-[50px] rounded-xl">
              <p className="font-semibold text-xs text-[#2C2B2B]">
                Event - specific training
              </p>
              <input
                type="checkbox"
                className="cursor-pointer checked:accent-[#eb1754] outline-none w-5 h-5"
              />
            </div>
            <div className="flex items-center px-4 justify-between bg-[#F1F1F1] h-[50px] rounded-xl">
              <p className="font-semibold text-xs text-[#2C2B2B]">
                Mindfulness and Mental Health
              </p>
              <input
                type="checkbox"
                className="cursor-pointer checked:accent-[#eb1754] outline-none w-5 h-5"
              />
            </div>
          </div>

          <div className="mt-36">
            <button
              onClick={() => {
                navigate('/dashboard');
              }}
              className="w-full h-[60px] rounded-lg bg-gradient-to-r from-[#95BEFF] to-[#7B91FF] text-white font-semibold text-base"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
