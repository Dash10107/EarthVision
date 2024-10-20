import Header from '@/components/Header';
import React, { useContext } from 'react';
import 'add-to-calendar-button';

import ThemeContext from '@/context/ThemeContext';
import {
  Calendar,
  momentLocalizer,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events } from '@/events';
import localFont from "next/font/local";

const localizer = momentLocalizer(moment);

// Load the fonts
const AktivGroteskBold = localFont({ 
    src: '../../pages/fonts/AktivGrotesk-Bold.ttf',
    variable: '--font-aktiv-bold' 
});

const AktivGroteskRegular = localFont({ 
    src: '../../pages/fonts/AktivGrotesk-Regular.ttf',
    variable: '--font-aktiv-regular' 
});

const CalendarComponent = () => {
  const { setNeonDark, neonDark } = useContext(ThemeContext);

  const components = {
    event: (props) => {
      const { title, start } = props;

      // Simple styling for the event text
      const eventStyle = {
        color: '#FFF',
        borderRadius: '8px',
        
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      };

      return (
        <a href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates={START_DATE}/{END_DATE}&details={EVENT_DESCRIPTION}&location={EVENT_LOCATION}`}>
          <div style={eventStyle} className='flex flex-col text-xs p-2 w-auto mx-2'>
            <p>{title}</p>
            <div className='text-xs'>
                Add to Calendar
            </div>
          </div>
        </a>
      );
    },
  };

  const dayPropGetter = (date) => {
    let backgroundColor = '#ffffff'; // Default background for weekdays
    
    if (date.getDay() === 0 || date.getDay() === 6) { 
      backgroundColor = '#f8f8f8'; // Light grey for weekends
    }
    
    return {
      style: {
        backgroundColor,
        padding: '5px',
        border: '2px solid #292929',
        margin: '1px',
      },
    };
  };

  return (
    <>
      <div id="container" className={`${neonDark && "bg-[#0d0d0d] text-white"}`}>
        <Header 
          text1={"The winner for Minithon is"} 
          text2={"Akhand Bharat"} 
          tabs={[
            { name: "Home", link: "/" },
            { name: "About", link: "/about" },
            { name: "Events", link: "/Events/event" },
            { name: "Profile", link: "/Auth/profile" },
            { name: "Calendar", link: "/Calendar/calendar", underline: true },
        ]} 
        />

        <div className='flex justify-center items-center'>
          <div className="w-screen h-screen md:h-[80vh] md:w-[80vw]">
            <Calendar
              events={events} 
              components={components}
              localizer={localizer}
              defaultView="week" 
              defaultDate={new Date()} 
              dayPropGetter={dayPropGetter}  
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendarComponent;