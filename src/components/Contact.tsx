const names: string[] = ["Anthony Luong", "Jason Mai", "Vicky Li", "Anissa Vichitthavong", "Emily Xu", "Leon Truong", "Meena Ha", "Ethan Nguyen", "Jessica Chhoy", "Jung Lee"];
const positions: string[] = ["President", "Vice President", "Secretary", "Treasurer", "Bulletin Editor", "Webmaster", "Fundraising Head"];
const emails: string[] = ["NA", "jasonmai52007@gmail.com", "vickyli354949@gmail.com", "anissavichitthavong@gmail.com", "emilyxu567@gmail.com", "leonkeyclub1@gmail.com", "meenaha0223@gmail.com", "ooowweeishethan@gmail.com", "chhoyjessica@gmail.com", "ljung509@gmail.com"]; 
const instagrams: string[] = ["https://www.instagram.com/antthienluong", "https://www.instagram.com/jason.mai07", "https://www.instagram.com/vickkyyy_", "https://www.instagram.com/anissavichitthavong", "https://www.instagram.com/em.xux", "https://www.instagram.com/leonmmtt/", "https://www.instagram.com/mha.vp", "https://www.instagram.com/viewethan", "https://www.instagram.com/chjessiica", "https://www.instagram.com/jung.1ee"];

let officers: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];
let committee: React.ReactElement<any, string | React.JSXElementConstructor<any>> | JSX.Element[] = [];

for (let i = 0; i < positions.length; i++) {
    officers.push(<li>{names[i]} ({positions[i]}) --{">"} <i>{emails[i]}</i> || <a href={instagrams[i]} target="_blank">Instagram</a></li>);
}

for (let i = positions.length; i < instagrams.length; i++) {
    committee.push(<li>{names[i]} --{">"} <i>{emails[i]}</i> || <a href={instagrams[i]} target="_blank">Instagram</a></li>);
}

const Contact = () => {
    return (
        <div id="contact">
            <br/>
            <h1 id="contact-title">Looking for someone?</h1>  

            <ul id="board-list">
                <li id="board-title">Key Club Board</li>
                {officers}
                
                <li>Club Committees:</li>
                <ul>
                {committee}
                </ul>
            </ul> 
        </div>
    )
}

export default Contact;