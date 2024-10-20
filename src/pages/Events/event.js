import Header from '@/components/Header';
import { ThemeContext } from '@emotion/react';
import Image from 'next/image';
import React, { useContext, useState } from 'react';
import dashboard from "../../assets/dashboard.svg";
import { events as eventList } from '@/events';
import Link from 'next/link';

const Accordion = ({ event }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="mb-4 border-b border-gray-300">
            {/* Accordion header */}
            <div 
                className="flex justify-between items-center cursor-pointer py-4 px-6 bg-gray-100 hover:bg-gray-200" 
                onClick={toggleAccordion}
            >
                <div>
                    <span className="font-semibold">{event.start.toLocaleDateString()}</span> - {event.title}
                </div>
                <div className="text-gray-500">
                    {event.location}
                    <span className="ml-4">{isOpen ? '-' : '+'}</span>
                </div>
            </div>

            {/* Accordion content (only show if isOpen is true) */}
            {isOpen && (
                <div className="p-6 bg-white text-gray-700">
                    <p><strong>Description:</strong> {event.description || 'No description available.'}</p>
                    <Link href={`/Events/${event.title}`} className='underline font-bold'>
                        Visit
                    </Link>
                </div>
            )}
        </div>
    );
};

const Event = () => {
    const { setNeonDark, neonDark } = useContext(ThemeContext);
    const [sortCriteria, setSortCriteria] = useState('date'); // Default sorting by date
    const [sortOrder, setSortOrder] = useState('asc'); // Default ascending order
    const [searchTerm, setSearchTerm] = useState('');

    // Sorting function
    const sortEvents = (events) => {
        return events.sort((a, b) => {
            const isAsc = sortOrder === 'asc';
            switch (sortCriteria) {
                case 'date':
                    return isAsc ? a.start - b.start : b.start - a.start;
                case 'title':
                    return isAsc ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title);
                case 'location':
                    return isAsc ? a.location.localeCompare(b.location) : b.location.localeCompare(a.location);
                default:
                    return 0;
            }
        });
    };

    // Filter events based on search term
    const filteredEvents = eventList.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedEvents = sortEvents(filteredEvents);

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
                <aside className="w-full md:w-64 bg-gray-100 p-4 border-b md:border-r">
                    {/* You can add any sidebar content here */}
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
                        <div className="bg-white bg-opacity-75 p-4 rounded-md z-10">
                            <h1 className="text-2xl md:text-4xl font-bold">Join Hands for Change!</h1>
                            <p className="mt-2 text-gray-600">Together, we can make a difference in our community...</p>
                        </div>
                    </header>

                    {/* Tabs and Event Filter */}
                    <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                        <div className="flex flex-col md:flex-row">
                            <button className="px-4 py-2 bg-purple-500 text-white rounded mr-4 mb-2 md:mb-0">All Events</button>
                            {/* Sorting Controls */}
                            <select 
                                value={sortCriteria} 
                                onChange={(e) => setSortCriteria(e.target.value)} 
                                className="p-2 border rounded mr-4"
                            >
                                <option value="date">Sort by Date</option>
                                <option value="title">Sort by Title</option>
                                <option value="location">Sort by Location</option>
                            </select>
                            <select 
                                value={sortOrder} 
                                onChange={(e) => setSortOrder(e.target.value)} 
                                className="p-2 border rounded"
                            >
                                <option value="asc">Ascending</option>
                                <option value="desc">Descending</option>
                            </select>
                        </div>
                        <input
                            type="text"
                            placeholder="Search by event name..."
                            className="p-2 border rounded w-full md:w-80 mt-2 md:mt-0"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    {/* Event List with Accordion */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Event List</h2>
                        <div className="bg-white p-4 rounded shadow">
                            {sortedEvents.length > 0 ? (
                                sortedEvents.map(event => (
                                    <Accordion key={event.id} event={event} />
                                ))
                            ) : (
                                <p className="text-gray-600">No events found.</p>
                            )}
                        </div>
                    </section>

                </main>
            </div>
        </>
    );
};

export default Event;
