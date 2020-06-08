import React from 'react'
import {FaChevronDown,FaInbox,FaRegCalendarAlt,FaRegCalendar} from 'react-icons/fa'

export const SideBar = () => {
    return ( 
    <div className="sidebar" data-testid="sidebar">
        <ul className="sidebar_generic">
            <li><span><FaInbox/></span><span>Inbox</span></li>
            <li><span><FaRegCalendar/></span><span>Today</span></li>
            <li><span><FaRegCalendar/></span><span>Next 7 days</span></li>
            <li></li>
        </ul>

        <div className="sidebar__middle">
            <span><FaChevronDown/></span>
            <h2>Projects</h2>
        </div>
        <ul className="sidebar__projects">
            <h3>projects will be here</h3>
        </ul>
        <h2>Add Projects Components here.</h2>

    </div>
     );
}
 
