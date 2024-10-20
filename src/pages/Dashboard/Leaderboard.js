import Header from '@/components/Header';
import React from 'react';
import localFont from 'next/font/local';

// Load the fonts
const AktivGroteskBold = localFont({
  src: '../fonts/AktivGrotesk-Bold.ttf',
  variable: '--font-aktiv-bold',
});

import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';

const Leaderboard = () => {

    // Add the following to handle window size dynamically
  const { width, height } = useWindowSize(); // useWindowSize from react-use
    console.log(width, height)

  return (
    <>
      <div id="container">
        <Header
          text1={'The winner for Minithon is'}
          text2={'Akhand Bharat'}
          linktext={'profiles'}
          tabs={[
            { name: 'Home', link: '/' },
            { name: 'About', link: '/about' },
            { name: 'Events', link: '/Events/event' },
            { name: 'Profile', link: '/Auth/profile', underline: true },
            { name: 'Calendar', link: '/Calendar/calendar' },
          ]}
        />

        {/* Title */}
        <div id="text-stuff" className="p-5 text-center">
          <p className={`${AktivGroteskBold.className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl`}>
            🎉Leaderboard🎉
          </p>
        </div>

        {/* Leaderboard Grid */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {/* Left Side: Leaderboard */}
            <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
              {/* Top 3 Users */}
              <div className="flex flex-col sm:flex-row justify-around bg-blue-600 text-white rounded-t-xl p-6 pb-0">
                {/* First user */}
                <div className="flex flex-col mt-6 sm:mt-10 items-center">
                  <img
                    src="https://img.freepik.com/free-vector/gradient-avatar-illustration_52683-142438.jpg"
                    alt="John Doe"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2"
                  />
                  <h3 className="text-sm sm:text-xl">John Doe</h3>
                  <p className="text-xs sm:text-base">Level 3</p>
                  <p className="text-base sm:text-lg font-semibold">2</p>
                  <div id="rankstep" className="bg-gradient-to-b from-[#6c74f7] to-[#5963f6] shadow-inner rounded-t-lg p-3 w-[7rem] sm:w-[10rem] h-[7rem] sm:h-[10rem]"></div>
                </div>

                {/* Second user */}
                <div className="flex flex-col items-center">
                  <img
                    src="https://img.freepik.com/free-vector/cheerful-girl-cute-yellow-dresses_24877-81517.jpg"
                    alt="Rey Mibourne"
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mb-2"
                  />
                  <h3 className="text-lg sm:text-2xl font-bold">Rey Mibourne</h3>
                  <p className="text-sm sm:text-base">Level 3</p>
                  <p className="text-lg sm:text-2xl font-bold">1</p>
                  <div id="rankstep" className="bg-gradient-to-b from-[#6c74f7] to-[#5963f6] shadow-inner rounded-t-lg p-3 w-[7rem] sm:w-[10rem] h-[7rem] sm:h-[10rem]"></div>
                </div>

                {/* Third user */}
                <div className="flex flex-col mt-6 sm:mt-10 items-center">
                  <img
                    src="https://img.freepik.com/free-vector/purple-man-with-blue-hair_24877-82003.jpg"
                    alt="Augusta Mitchell"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mb-2"
                  />
                  <h3 className="text-sm sm:text-xl">Augusta Mitchell</h3>
                  <p className="text-xs sm:text-base">Level 3</p>
                  <p className="text-base sm:text-lg font-semibold">3</p>
                  <div id="rankstep" className="bg-gradient-to-b from-[#6c74f7] to-[#5963f6] shadow-inner rounded-t-lg p-3 w-[7rem] sm:w-[10rem] h-[7rem] sm:h-[10rem]"></div>
                </div>
              </div>

              {/* Rank List */}
              <div className="mt-4">
                <ul>
                  <li className="flex justify-between py-2 border-b">
                    <div className="flex items-center">
                      <img
                        src="https://img.freepik.com/free-vector/cheerful-girl-cute-yellow-dresses_24877-81517.jpg"
                        alt="Rey Mibourne"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-4"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold">Rey Mibourne</h4>
                        <p className="text-xs sm:text-sm">Level 3</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-green-600">+15 from last week</p>
                  </li>

                  <li className="flex justify-between py-2 border-b">
                    <div className="flex items-center">
                      <img
                        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg?t=st=1729405179~exp=1729408779~hmac=77663b4dfd4891c646cf1d341ea8d552232399902faf7ee2611a8e00fa051891&w=740"
                        alt="Rey Mibourne"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-4"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold">Rey Mibourne</h4>
                        <p className="text-xs sm:text-sm">Level 3</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-green-600">+1 from last month</p>
                  </li>

                  <li className="flex justify-between py-2 border-b">
                    <div className="flex items-center">
                      <img
                        src="https://img.freepik.com/free-vector/gradient-avatar-illustration_23-2150891915.jpg?t=st=1729405804~exp=1729409404~hmac=4f5585b8acce7e8826a26004c5c672dc7daf1c130b235ab5cc58c3d57cd3c584&w=740"
                        alt="Rey Mibourne"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-4"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold">Rey Mibourne</h4>
                        <p className="text-xs sm:text-sm">Level 3</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-green-600">+2 from last month</p>
                  </li>

                  <li className="flex justify-between py-2 border-b">
                    <div className="flex items-center">
                      <img
                        src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?ga=GA1.1.1794698047.1725525078&semt=ais_hybrid"
                        alt="Rey Mibourne"
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-4"
                      />
                      <div>
                        <h4 className="text-sm sm:text-base font-semibold">Rey Mibourne</h4>
                        <p className="text-xs sm:text-sm">Level 3</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-green-600">+5 from last month</p>
                  </li>
                  {/* Repeat similar blocks for other users */}
                </ul>
              </div>
            </div>

            {/* Right Side: Achievements */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-4">
                <img
                  src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671122.jpg"
                  alt="Rey Mibourne"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mr-2 sm:mr-4"
                />
                <div>
                  <h3 className="text-sm sm:text-xl font-bold">Rey Mibourne</h3>
                  <p className="text-gray-100 mt-1 sm:mt-2 p-1 text-center rounded-full font-bold bg-violet-400 text-xs sm:text-sm">
                    Level 3
                  </p>
                  <p className="text-yellow-500 text-xs sm:text-base">⭐⭐⭐</p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4">
                <div className="bg-gray-100 p-2 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-base font-bold">Level 1</p>
                  <p className="text-xs sm:text-sm">Talk to Listen Ratio</p>
                </div>
                <div className="bg-gray-100 p-2 sm:p-4 rounded-lg">
                  <p className="text-xs sm:text-base font-bold">Level 3</p>
                  <p className="text-xs sm:text-sm">Positive Sentiment</p>
                </div>
                {/* Other achievement blocks */}
              </div>

              {/* Progress Bar */}
              <div className="mt-4">
                <p className="text-xs sm:text-sm font-bold">Level 3</p>
                <div className="w-full bg-gray-200 rounded-full h-3 sm:h-4">
                  <div
                    className="bg-blue-600 h-3 sm:h-4 rounded-full"
                    style={{ width: '87%' }}
                  ></div>
                </div>
                <p className="text-right text-xs sm:text-sm mt-1 sm:mt-2">87% completed</p>
              </div>

              <p className="text-sm font-bold">Achieve</p>
              <div id="achieve" className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {/* Example of achievement */}
                <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-2 sm:p-4 h-16 sm:h-20">
                  {/* Icon and badge */}
                  <div className="flex items-center">
                    <div className="bg-[#384EFC] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-center p-2">
                      🏅
                    </div>
                    <p className="ml-2 text-xs sm:text-base">Achievement unlocked</p>
                  </div>
                  {/* Progress */}
                  <p className="text-green-500 text-xs sm:text-base">3/5</p>
                </div>

                <div className="flex items-center justify-between bg-white shadow-lg rounded-lg p-2 sm:p-4 h-16 sm:h-20">
                  {/* Icon and badge */}
                  <div className="flex items-center">
                    <div className="bg-[#384EFC] text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full text-center p-2">
                      🏆
                    </div>
                    <p className="ml-2 text-xs sm:text-base">Achievement unlocked</p>
                  </div>
                  {/* Progress */}
                  <p className="text-green-500 text-xs sm:text-base">1/5</p>
                </div>
                {/* More achievements here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Confetti width={width} height={height} recycle={false}/>
    </>
  );
};

export default Leaderboard;
