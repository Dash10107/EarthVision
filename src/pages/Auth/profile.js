import Header from '@/components/Header';
import { ThemeContext } from '@emotion/react';
import Image from 'next/image';
import React, { useContext, useEffect } from 'react';
import vol1 from "../../assets/vol2.jpg";
import { events } from '@/events';


import localFont from "next/font/local"
import Link from 'next/link';

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-bold' 
});

const profile = () => {

  const { setNeonDark, neonDark, user } = useContext(ThemeContext);

  useEffect(() => {
    if (user === "" || user === null) {
      window.location.assign('/');  // Redirect to dashboard upon login
    }
  }, [user]);

  const notifications = [
      {
        event: "Hackathon",
        notification: {
          title: "🚀 Upcoming Hackathon",
          message: "Get ready! The hackathon starts on October 25th. Team up and build something amazing!",
          type: "info",
          icon: "💻",
          bgColor: "bg-blue-500",
          textColor: "text-white"
        }
      },
      {
        event: "Product Launch",
        notification: {
          title: "🎉 Product Launch Event",
          message: "Join us for the live product launch on November 1st. Don’t miss the big reveal!",
          type: "success",
          icon: "📱",
          bgColor: "bg-green-500",
          textColor: "text-white"
        }
      },
      {
        event: "Webinar",
        notification: {
          title: "📢 Webinar: AI for Beginners",
          message: "Learn the basics of AI on November 3rd. Sign up now to secure your spot!",
          type: "info",
          icon: "🧠",
          bgColor: "bg-purple-500",
          textColor: "text-white"
        }
      },
      {
        event: "Maintenance",
        notification: {
          title: "⚠️ Scheduled Maintenance",
          message: "System maintenance is scheduled for November 5th from 12 AM to 3 AM. Please plan accordingly.",
          type: "warning",
          icon: "🛠️",
          bgColor: "bg-yellow-500",
          textColor: "text-black"
        }
      },
      {
        event: "Conference",
        notification: {
          title: "🎤 Tech Conference 2024",
          message: "Join leading experts on November 10th at the annual Tech Conference. Register now!",
          type: "info",
          icon: "🎙️",
          bgColor: "bg-red-500",
          textColor: "text-white"
        }
      },
      {
        event: "Holiday Sale",
        notification: {
          title: "🎁 Holiday Sale Alert!",
          message: "Exclusive discounts coming up on November 15th. Shop and save big!",
          type: "success",
          icon: "🛍️",
          bgColor: "bg-pink-500",
          textColor: "text-white"
        }
      },
      {
        event: "Black Friday Deal",
        notification: {
          title: "🔥 Black Friday Mega Deal",
          message: "Don't miss our Black Friday sale on November 24th. Grab your deals before they're gone!",
          type: "warning",
          icon: "💸",
          bgColor: "bg-orange-500",
          textColor: "text-white"
        }
      }
    ]
  

  return (
    <>
      <Header 
        text1={"The winner for Minithon is"} 
        text2={"Akhand Bharat"} 
        linktext={"profiles"}
        setNeonDark={setNeonDark}
        neonDark={neonDark}
        tabs={[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Events", link: "/Events/event" },
            { name: "Profile", link: "/Auth/profile", underline: true },
            { name: "Calendar", link: "/Calendar/calendar" },
        ]} 
      />

      <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white shadow-lg">
          <div className="p-6">
            <h1 className="text-xl font-semibold">Profile</h1>
            <nav className="mt-6">
              <ul className="space-y-4">
                <li>Feeds</li>
                <li>Event</li>
                <li>Charity</li>
                <li>Friends</li>
                <li>
                  <Link href={"https://forms.gle/Psow8y8AP63vnTbr6"}>
                  Create Your Own Event
                  </Link>
                </li>
              </ul>
            </nav>
            <div id="notification-center" className='bg-white mt-5 p-3 rounded-lg shadow-lg'>
              <p className={` ${AktivGroteskBold.className} `}>Notifications</p>
              
              {/* Make this div scrollable */}
              <div id="scrollable" className='h-64 overflow-y-scroll'>
                {
                  notifications.map((item, index) => (
                    <div id="card" key={index} className={`p-3 bg-white my-2 shadow-lg rounded-lg`}>
                      <div id="header">
                        <div id="title" className={`${item.notification?.bgColor} font-bold rounded-full text-sm p-2`}>
                          {item.notification?.title}
                        </div>
                        <div id="info" className={`rounded-full text-xs`}>
                          {item.notification?.message}
                        </div>
                      </div>
                      <div id="time" className='text-xs mt-3 font-semibold text-gray-500'>
                        15 mins ago
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>

          </div>
        </aside>

        {/* Main Profile Content */}
        <main className="flex-1 p-6">
          {/* Profile Header */}
          <div className="flex items-center justify-between bg-white shadow-md p-6 rounded-lg">
            <div className="flex items-center space-x-4">
              <Image
                src={vol1} // Use a placeholder image or a real one
                alt="Profile Picture"
                width={80}
                height={80}
                className="rounded-full"
              />
              <div>
                <h2 className="text-2xl font-semibold">Fredy Mercury</h2>
                <p className="text-sm text-gray-500">
                  Youth Volunteer
                </p>
                <p className="text-sm">1.25k Followers &bull; 455 Following</p>
              </div>
            </div>
          </div>

          {/* Badge Section */}
        <div className='md:flex gap-2'>
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">Badges</h3>
              <div className="flex space-x-6 mt-4">
                  {/* Example Badges */}
                  <div className="flex flex-col items-center">
                  {/* Circle Badge */}
                  <div className="w-12 h-12 bg-blacks rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">🏆</span> {/* Optional Emoji/Icon */}
                  </div>
                  <span className={`mt-2 text-xs md:text-sm ${AktivGroteskBold.className}`}>Top Volunteer</span>
                  </div>

                  <div className="flex flex-col items-center">
                  {/* Diamond Badge */}
                  <div className="w-12 h-12 bg-blacks transform rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">🌟</span> {/* Optional Emoji/Icon */}
                  </div>
                  <span className={`mt-2 text-xs md:text-sm ${AktivGroteskBold.className}`}>Event Organizer</span>
                  </div>

                  <div className="flex flex-col items-center">
                  {/* Square Badge */}
                  <div className="w-12 h-12 bg-blacks flex rounded-full items-center justify-center">
                      <span className="text-white font-bold text-2xl">🤝</span> {/* Optional Emoji/Icon */}
                  </div>
                  <span className={`mt-2 text-xs md:text-sm ${AktivGroteskBold.className}`}>Community Helper</span>
                  </div>
              </div>
          </div>
          
          <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Achievement</h3>
            <div className="flex space-x-6 mt-4">
                {/* Example Badges */}
                <div className="flex flex-col items-center">
                {/* Circle Badge */}
                <div className="w-12 h-12 bg-blacks rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">🏆</span> {/* Optional Emoji/Icon */}
                </div>
                <span className={`mt-2 text-xs md:text-sm ${AktivGroteskBold.className}`}>50+ Hours Worked</span>
                </div>
            </div>

        </div>

        
        </div>
        <Link href={"/Dashboard/Dashboard"}>
          <div className="bg-white p-2 m-2 rounded-lg w-full shadow-lg font-bold text-center">
            Explore Dashboard
          </div>
        </Link>
          {/* Events Section */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.slice(0, 5).map((event) => (
              <div key={event.id} className="bg-white p-4 rounded-lg shadow-md">
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image
                    src={`https://img.freepik.com/free-photo/activists-picking-rubbish-grove_23-2147826346.jpg?t=st=1726810049~exp=1726813649~hmac=fd28be5438236cf3109a4efef859a80ed24af9ab0e9186bd66c6836c49f4b472&w=996`} // placeholder image for each event
                    alt={event.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{event.title}</h3>
                <p className="text-gray-500">Location: {event.location}</p>
                <p className="text-gray-400 text-sm mt-2">Cause: {event.cause}</p>
                <p className="text-gray-500 mt-2">{event.description}</p>
                <p className="text-gray-500 mt-2">Available Spots: {event.availableSpots}</p>
                <p className="text-gray-500 mt-2">Organizer: {event.organizer}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default profile;
