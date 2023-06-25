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
            <h1 id="remind-title">Join Remind: text @kentwoodkc to 81010</h1>
            </div>

            <article>
                <section className="blog-section">
                    <h2 className="blog-title"><a href="https://pnwkeyclub.org/shop/key-club-day-north-2023/">Key Club Days North</a></h2>
                    <ul className="blog-list">
                        <li>Key Club Days kick-off event will be available to you the night prior to event (FREE high-quality workshops w/ RSVP)</li>
                        <li>In-person participants receive: lunch, all-day admission (until 6 PM) to Wild Waves, team-building activities by LTG, + a service project</li>
                        <li>Registration open until 08/25/2023 ($55)</li>
                        <li>12PM-2PM, Saturday September 9th @ Wild Waves</li>
                    </ul>
                </section>

                <section className="blog-section">
                    <h2 className="blog-title">District Project (2023-2024 School Year)</h2>
                   
                    <p className="blog-paragraph">
                    The District Project Committee is excited to announce the new District Project for the 2023-2024 service year - Youth Houselessness.
                    </p>

                    <p className="blog-paragraph">
                    They have developed the SEAD Initiative, which is an acronym for Support, Empower, Act, and Destigmatize.
                    </p>

                    <p className="blog-paragraph">
                    Youth Houselessness is an extremely prevalent and tangible issue within the PNW. According to the Washington State Department of Commerce, there are approximately 13,000 unaccompanied youth and young adults in Washington State.
                    </p>

                    <p className="blog-paragraph">
                    This year, we hope to serve 50,000 hours and donate $15,000 to help end youth houselessness. As Key Clubbers, we can make an impact by organizing food drives, creating packages of basic necessities, and fundraising for local organizations.  
                    </p> 
                </section>
            </article>

        </div>
    )
}

export default Announcements;