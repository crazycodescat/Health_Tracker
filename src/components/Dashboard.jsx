import { FaChevronLeft } from 'react-icons/fa6';
import { FiAlertTriangle } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import NavBar from '../components/NavBar';
const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-[375px] mx-auto relative">
      <div className="px-4 pb-28 ">
        <div className="flex items-center gap-6 mt-12">
          <div className="flex items-center rounded-md bg-[#F1F1F1] p-2 cursor-pointer">
            <FaChevronLeft />
          </div>
          <p className="font-semibold text-xl text-center text-[#2C2B2B] text">
            Workout Tracker
          </p>
        </div>

        {/* Workout Tracker Chart */}
        <div
          onClick={() => navigate('/workoutScheduler')}
          className="flex flex-col gap-10 relative mt-24"
        >
          <hr className="border-dashed" />
          <hr className="border-dashed" />
          <hr className="border-dashed" />
          <hr className="border-dashed border-[#8099FF]" />
          <div className="flex flex-col gap-2 absolute bottom-0 left-[88px]">
            <div className="absolute  -top-6 -left-8 ">
              <p className="w-20 text-sm">Good job</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-1 h-1 rounded-full bg-[#111111AB]"></div>
              <div className="w-1 h-3 rounded-full bg-[#111111AB]"></div>
            </div>
            <div>
              <div
                className="bg-[#34B009] rounded-t-full
              w-1 h-4"
              ></div>
              <div
                className="bg-[#8099FF] rounded-b-full
              w-1 h-[104px]"
              ></div>
            </div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[100px]">
            <div
              className="bg-[#8099FF] rounded-t-full
             w-1 h-14"
            ></div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[160px]">
            <div
              className="bg-[#8099FF] rounded-t-full
             w-1 h-8"
            ></div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[180px]">
            <div
              className="bg-[#8099FF] rounded-t-full
             w-1 h-14"
            ></div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[188px]">
            <div
              className="bg-[#8099FF] rounded-t-full
             w-1 h-6"
            ></div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[205px]">
            <div
              className="bg-[#ff00006c] rounded-t-full
             w-1 h-4"
            ></div>
            <div
              className="bg-[#8099FF] rounded-b-full
             w-1 h-6"
            ></div>
          </div>
          <div className="flex flex-col gap-2 absolute bottom-0 left-[210px]">
            <div className="absolute  -top-6 -left-[54px] ">
              <p className="w-32 text-sm">less then 320cal</p>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-1 h-1 rounded-full bg-[#111111AB]"></div>
              <div className="w-1 h-3 rounded-full bg-[#111111AB]"></div>
            </div>
            <div>
              <div
                className="bg-[#ff00006c] rounded-t-full
              w-1 h-4"
              ></div>
              <div
                className="bg-[#8099FF] rounded-b-full
              w-1 h-[104px]"
              ></div>
            </div>
          </div>

          <div className="flex flex-col absolute bottom-0 left-[215px]">
            <div
              className="bg-[#ff00006c] rounded-t-full
             w-1 h-4"
            ></div>
            <div
              className="bg-[#8099FF] rounded-b-full
             w-1 h-12"
            ></div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[220px]">
            <div
              className="bg-[#ff00006c] rounded-t-full
             w-1 h-4"
            ></div>
            <div
              className="bg-[#8099FF] rounded-b-full
             w-1 h-8"
            ></div>
          </div>
          <div className="flex flex-col absolute bottom-0 left-[225px]">
            <div
              className="bg-[#ff00006c] rounded-t-full
             w-1 h-4"
            ></div>
            <div
              className="bg-[#8099FF] rounded-b-full
             w-1 h-6"
            ></div>
          </div>

          <div className="flex justify-between w-full absolute -bottom-6">
            <p>12:00</p>
            <p>6:00</p>
            <p>12:00</p>
            <p>6:00</p>
          </div>
          <div className="absolute top-4">
            <p>900CAL</p>
          </div>
        </div>

        {/* you've burner fewer calories than yesterday. */}
        <div className="flex gap-4 px-4 bg-gradient-to-r from-[#819cff60] to-[#10101000] py-4 rounded-md border-[#45454513] border-[1px] border-solid items-center mt-10">
          <div className="flex items-center text-xl">
            <FiAlertTriangle className="text-[#7E96FF]" />
          </div>
          <div>
            <p className="font-medium text-xs text-[#2C2B2B] max-w-[300px] font-[]">
              You've burned fewer calories than yesterday. Time to get moving!
            </p>
          </div>
        </div>

        {/* Upcoming Workout */}
        <div className="flex flex-col gap-4 mt-20">
          <div className="flex justify-between">
            <p className="font-semibold text-base text-[#2C2B2B]">
              Upcoming Workout
            </p>
            <span className="text-[#7F7F7F] font-medium text-xs">See more</span>
          </div>

          <div className="flex gap-4 items-center justify-between p-4 shadow-xl bg-white rounded-xl">
            <div className="flex gap-4 items-center">
              <div className="w-16 h-16 bg-slate-200 rounded-full">
                <img
                  src="./images/269733701b8604f00f8ab3dbc8874dc4.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-medium text-xs text-[#2C2B2B]">
                  Full Body Workout
                </h2>
                <p className="font-medium text-xs text-[#7F7F7F]">Today 3pm</p>
              </div>
            </div>
            <div className="flex justify-end p-1 w-10 rounded-full bg-[#8099FF] cursor-pointer">
              <div className=" w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
          <div className="flex gap-4 items-center justify-between p-4 shadow-xl bg-white rounded-xl">
            <div className="flex gap-4 items-center">
              <div className="flex w-16 h-16 overflow-hidden bg-slate-200 rounded-full">
                <img
                  src="./images/63ce83a9876ee1cadf652148a636fe39.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col gap-2">
                <h2 className="font-medium text-xs text-[#2C2B2B]">
                  Upper Body Workout
                </h2>
                <p className="font-medium text-xs text-[#7F7F7F]">
                  4 Feb, 3:30pm
                </p>
              </div>
            </div>
            <div className="flex justify-end p-1 w-10 rounded-full bg-[#8099FF] cursor-pointer">
              <div className=" w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* What do you want to train */}
        <div className="flex flex-col gap-4 mt-4">
          <p className="font-semibold text-base text-[#2C2B2B]">
            What Do You Want to Train
          </p>

          <div className="flex items-center justify-between h-[124px] px-4 bg-[#8cb0ffa2] rounded-xl">
            <div className="flex flex-col gap-4">
              <h1 className="font-medium text-[12px]">Full Body Workout</h1>
              <div className="flex flex-col gap-2">
                <p className="font-normal text-[10px]">Arms</p>
                <p className="font-normal text-[10px]">Chest</p>
              </div>
            </div>
            <div className="w-[100px] h-[100px] bg-[#ffffff6b] rounded-full">
              <img
                src="./images/32610d884493905711642300c8cc67c0.png"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
      <NavBar />
    </div>
  );
};

export default Dashboard;
