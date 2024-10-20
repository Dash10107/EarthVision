import BackAndText from "@/components/BackAndText";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { FaLocationArrow } from "react-icons/fa";
import HeroTexts from "@/components/HeroTexts";
import ImageBanner from "@/components/ImageBanner";
import TextImageCard from "@/components/TextImageCard";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ImageCarousel from "@/components/Carausel";

import localFont from "next/font/local";

import Banner1 from "../assets/Banner1.png";
import Banner2 from "../assets/Banner2.png";
import Banner3 from "../assets/Banner3.png";
import volunteer from "../assets/volunteer.svg";
import vol2 from "../assets/vol2.jpg";
import vol3 from "../assets/vol3.jpg";
import vol4 from "../assets/vol4.jpg";
import vol5 from "../assets/vol5.jpg";
import vol6 from "../assets/vol6.jpg";
import vol7 from "../assets/vol7.jpg";
import ThemeContext from "@/context/ThemeContext";
import CompareSlider from "@/components/CompareSlider";
import Link from "next/link";
import Donation from "@/components/Donation";
import ContactUs from "@/components/ContactUs";

// Load the fonts
const AktivGroteskBold = localFont({
  src: "../pages/fonts/AktivGrotesk-Bold.ttf",
  variable: "--font-aktiv-bold",
});

const AktivGroteskRegular = localFont({
  src: "../pages/fonts/AktivGrotesk-Regular.ttf",
  variable: "--font-aktiv-bold",
});

// IF NEEDED :: https://flatuicolors.com/

const index = () => {
  const tempImages = [Banner1, Banner2, Banner3];

  const [showAnnouncement, setShowAnnouncement] = useState(true);

  const { setNeonDark, neonDark } = useContext(ThemeContext);

  const text =
    "Welcome to EarthVision, an interactive platform designed to empower individuals in their journey toward environmental sustainability. Discover eco-friendly activities, track your personal progress, and visualize your positive impact. With EarthVision, you can explore initiatives by category and location, set sustainability goals, and earn achievements for your efforts. Whether you're contributing to reducing CO2 emissions or joining local environmental events, our platform brings your contributions to life. \nTogether, let's create a greener future!";

  return (
    <>
      <ThemeContext.Provider value={{ neonDark, setNeonDark }}>
        <div className={`overflow-hidden ${neonDark && "bg-[#0d0d0d]"} `}>
          <Header
            text1={"The winner for Minithon is"}
            text2={"Akhand Bharat"}
            linktext={"switch theme"}
            setNeonDark={setNeonDark}
            neonDark={neonDark}
            tabs={[
              { name: "Home", link: "/", underline: true },
              { name: "About", link: "/about" },
              { name: "Events", link: "/Events/event" },
              { name: "Profile", link: "/Auth/profile" },
              { name: "Calendar", link: "/Calendar/calendar" },
            ]}
          />

          <ImageCarousel images={tempImages} />

          <div id="compare-slider" className="mt-2 p-4">
            <div className="md:flex justify-between items-center">
              <p className="text-4xl font-bold md:py-7">Beach Cleanliness drive</p>
              <p className="text-xl font-bold py-7 flex gap-2 items-center">
                <FaLocationArrow /> Girgaon Chowpatty
              </p>
            </div>
            <CompareSlider />
          </div>

          <div className="lg:flex my-5 lg:my-10">
            <div className="lg:w-[50%]">
              <HeroTexts
                setNeonDark={setNeonDark}
                neonDark={neonDark}
                heading={"Make Every Action Count Towards a Greener Tomorrow"}
                para={text}
              />

              <div className="flex justify-center mt-10">
                <Button text="Explore more" arrowType="minimal" mode="dark" />
              </div>
            </div>

            <motion.div className="flex justify-center items-center mt-5 lg:mt-20 lg:w-[50%] w-full h-[500px] lg:h-auto">
              <Image
                src={volunteer}
                height={1100}
                className="w-auto"
                objectFit="cover" // This will make the image cover the container without distortion
                alt="Volunteering Image"
              />
            </motion.div>
          </div>

          <div id="component">
            <section class="py-24 relative">
              <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div class="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
                  <div class="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
                    <div class="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                      <img
                        class="rounded-xl object-cover"
                        src="https://img.freepik.com/free-vector/flat-world-population-day-background-with-planet-people_23-2149427306.jpg?t=st=1729407882~exp=1729411482~hmac=c0e1be19d377e05ac86bfb5c4de98bbceb76da2449098b0746506562263fbc77&w=996"
                        alt="Cultural Awareness Event"
                      />
                    </div>
                    <img
                      class="sm:ml-0 ml-auto rounded-xl object-cover"
                      src="https://img.freepik.com/free-photo/close-up-students-standing-hands-making-fist-bump-gesture_1150-4511.jpg?t=st=1729407927~exp=1729411527~hmac=5a41d7954a9cdf513367de80b8eb5d657b02a374f40a00d0978e217276d254a8&w=996"
                      alt="Community Engagement"
                    />
                  </div>
                  <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                    <div class="w-full flex-col justify-center items-start gap-8 flex">
                      <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                        <h2 class="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                          Uniting Cultures, Strengthening Communities
                        </h2>
                        <p class="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                          Through collaboration and engagement, we aim to create
                          a community where every voice matters. Together, we
                          celebrate our diverse backgrounds, fostering
                          understanding and unity across cultures.
                        </p>
                      </div>
                      <div class="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                        <div class="flex-col justify-start items-start inline-flex">
                          <h3 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                            10+
                          </h3>
                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                            Years of Cultural Events
                          </h6>
                        </div>
                        <div class="flex-col justify-start items-start inline-flex">
                          <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                            50+
                          </h4>
                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                            Community Projects
                          </h6>
                        </div>
                        <div class="flex-col justify-start items-start inline-flex">
                          <h4 class="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                            500+
                          </h4>
                          <h6 class="text-gray-500 text-base font-normal leading-relaxed">
                            Participants Engaged
                          </h6>
                        </div>
                      </div>
                    </div>
                    <Link href={"/CarbonFootprint/CarbonFootprint"}>
                      <button class="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span class="px-1.5 text-white text-sm font-medium leading-6">
                          Check your Carbon Footprint
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* gray textbox */}
          <div id="grayish-textarea" className="mb-24">
            <BackAndText
              text={text}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Explore Sustainable Ways to Make a Difference"}
              title={"From Recycling to Tree Planting"}
              text={
                "Browse through activities based on your interests and location. Whether you're recycling, conserving energy, or planting trees, we've got something for everyone! Start making a difference today!"
              }
              imageUri={vol2} // Replace with your image path
              buttonText={"Learn more"}
              direction={"right"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>
          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Recycling Initiatives"}
              title={"Turn waste into a resource"}
              text={
                "Discover local recycling programs and track your contributions. Be a part of the recycling movement and reduce landfill waste!"
              }
              imageUri={vol7} // Replace with recycling-related image
              buttonText={"Join Now"}
              direction={"left"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Energy Conservation Challenges"}
              title={"Reduce Your Energy Consumption"}
              text={
                "Join energy-saving challenges. Simple actions like switching off lights and using renewable energy can lower your carbon footprint."
              }
              imageUri={vol5} // Replace with energy-related image
              buttonText={"Learn more"}
              direction={"right"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Community Clean-Up Events"}
              title={"Join Local Clean-Ups"}
              text={
                "Join hands with your community to keep parks, streets, and beaches clean. Sign up for an event near you and see the immediate impact!"
              }
              imageUri={vol6} // Replace with clean-up related image
              buttonText={"Find Events"}
              direction={"left"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Tree Planting Drives"}
              title={"Help Combat Climate Change"}
              text={
                "Join local drives or start your own tree planting initiative to contribute to a greener future!"
              }
              imageUri={vol3} // Replace with tree-planting related image
              buttonText={"Plant Trees"}
              direction={"right"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Your Sustainability Journey, Visualized"}
              title={"See Your Impact"}
              text={
                "Track the impact of your actions in real-time through interactive charts. Watch your CO2 savings grow as you complete more activities!"
              }
              imageUri={vol2} // Replace with tracking-related image
              buttonText={"Track Now"}
              direction={"left"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>

          <div
            id="textimgcard"
            className="flex justify-center items-center mx-auto"
          >
            <TextImageCard
              head={"Be Part of Something Bigger"}
              title={"Upcoming Events"}
              text={
                "Stay informed about upcoming environmental events, clean-ups, and workshops in your area. Never miss an opportunity to make a difference!"
              }
              imageUri={vol4} // Replace with events-related image
              buttonText={"View Events"}
              direction={"right"}
              setNeonDark={setNeonDark}
              neonDark={neonDark}
            />
          </div>
          
          <div id="donation">
            <Donation />
          </div>
          <ContactUs/>  


          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default index;
