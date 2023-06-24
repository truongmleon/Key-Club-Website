import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
}

const Announcements = () => {
    return (
        <div id="announcements-page">
            <h1 id="announcements-title">View the Instagram!</h1>
            <h2 id="disclaimer">May not work under KSD internet :(</h2>

            <div className="flex">
            <h1 data-aos="zoom-in" id="remind-title">Join the Remind!</h1>
            </div>
        </div>
    )
}

export default Announcements;