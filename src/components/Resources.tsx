import servicepaper from "/src/files/service.pdf";

const dates = [];

const Resources = () => {
    return (
        <div id='resources-page'>
            <h1 id="resources-title">Looking for something?</h1>
            <h2 id="note">Some quick things to note..</h2>
            <ul id="note-list">
                <li>Meetings held in Mr. White's 👨‍🔬 room (565) before & after-school on Mondays (see below for dates)</li>
                <li>Members are required to complete <u>13-15 hours</u> per year to stay as a member of Key Club 👀</li>
                <li>Are you a senior? Complete <u>90-100 hours</u> in your Key Club career for a Key Club Cord 🤩</li>
                <li>A meeting consists of slides with service opportunities, quick announcements, activities (in afternoon meetings), contact information, and more!</li>
            </ul>
            <div id="btn-grid">
            <a href="" target="_blank"><button>Membership Form</button></a>
            <a href="" target="_blank"><button>Hour Submission Form</button></a>
            <a href={servicepaper} download="service.pdf" target="_blank"><button>Community Service Sheet</button></a>

            <a href="" target="_blank"><button>Missed Meeting Form</button></a>
            <a href="" target="_blank"><button>Election Interest Slides</button></a>
            <a href="" target="_blank"><button>DCON Info</button></a>
            </div>
        </div>
    )
}

export default Resources;