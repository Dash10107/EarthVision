import Header from '@/components/Header';
import { ThemeContext } from '@emotion/react';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import dashboard from "../../assets/dashboard.svg";
import { events as eventList } from '@/events'; // Assuming events is an array of event objects
import { useRouter } from 'next/router';

const IndividualEvent = () => {
    const { setNeonDark, neonDark } = useContext(ThemeContext);
    const [eventdetails, setEventDetails] = useState(null); // State to store the event details
    const router = useRouter();
    const { individualevent } = router.query; // Get the event ID from the query

    // Fetch event details when the individualevent query param changes
    useEffect(() => {
        if (individualevent) {
            const selectedEvent = eventList.find(event => event.title === individualevent); // Assuming `id` is unique
            if (selectedEvent) {
                setEventDetails(selectedEvent);
            }
        }
    }, [individualevent]); // Re-run when individualevent changes

    if (!eventdetails) {
        return <p>Loading event details...</p>; // Show loading state if event details aren't loaded yet
    }

    const formatDate = (date) => {
        return date.toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: true,
        });
    };

    return (
        <>
            <Header 
                text1={"The winner for Minithon is"} 
                text2={"Zucky the Lizard"} 
                linktext={"profiles"}
                setNeonDark={setNeonDark}
                neonDark={neonDark}
                tabs={[
                    { name: "Home", link: "/" },
                    { name: "About", link: "/about" },
                    { name: "Events", link: "/Events/event", underline: true },
                    { name: "Profile", link: "/Auth/profile" },
                    { name: "Calendar", link: "/Calendar/calendar" },
                ]} 
            />

            <div id='eventlist' className="flex flex-col md:flex-row h-screen bg-gray-50 font-sans">

                {/* Sidebar */}
                <aside className="w-full md:w-64 bg-gray-100 md:p-4 border-b md:border-r">
                    {/* Sidebar content */}
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6">
                    <header className="flex flex-col md:flex-row justify-between items-center mb-10 h-96 relative">
                        <Image 
                            src={dashboard} 
                            alt="Background Image"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0 z-0"
                        />
                        <div className="bg-white bg-opacity-75 p-2 md:p-4 rounded-md z-10">
                            <h1 className="text-2xl md:text-4xl font-bold">Join Hands for Change!</h1>
                            <p className="mt-2 text-gray-600">Together, we can make a difference in our community...</p>
                        </div>
                    </header>

                    {/* Event Details Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Event Details</h2>
                        <div className="bg-white p-4 rounded shadow">
                            <div id="heading">
                                <div id="title" className=''>
                                    <h3 className="text-xl md:text-4xl font-semibold">{eventdetails.title}</h3>
                                </div>
                                <div id="date" className="mt-2 flex flex-col md:flex-row gap-2 text-xs md:text-base font-bold justify-between">
                                    <p>Start: {formatDate(eventdetails.start)}</p>
                                    <p>End: {formatDate(eventdetails.end)}</p>
                                </div>
                                <div id="details" className="mt-2 flex flex-col md:flex-row gap-2 text-xs md:text-base font-bold justify-between">
                                    <p>Location: {eventdetails.location}</p>
                                    <p>Cause: {eventdetails.cause}</p>
                                </div>
                                <div id="description" className="mt-4 text-xs md:text-lg">
                                    <p>{eventdetails.description}</p>
                                </div>
                                <div id="availability" className="mt-5 font-bold text-xs md:text-base">
                                    <p>Available Spots: {eventdetails.availableSpots}</p>
                                    <p>Managing Committee: {eventdetails.organizer}</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
};

export default IndividualEvent;
