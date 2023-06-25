const info = document.getElementById("info");

info?.addEventListener("click", () =>{
    window.open("https://www.keyclub.org");
});

const Home = () => {
    return (
        <div id="home">
            <br/>
            <h1 id="title">Kentwood High School</h1>   
        </div>
    )
}

export default Home;