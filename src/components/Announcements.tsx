import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Announcements = () => {
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="announcements-page">
            <h1 id="announcements-title">View the Instagram!</h1>
            <h2 id="disclaimer">May not work under KSD internet :(</h2>

            <div data-aos="fade-down" className="flex">
            <h1 id="remind-title">Join the Remind!</h1>
            </div>
        </div>
    )
}

export default Announcements;