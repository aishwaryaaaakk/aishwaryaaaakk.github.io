import './Home.css'
function Home(){

    const handleChange=()=>{
        window.open(
            "https://drive.google.com/file/d/1RmNn8m9QHRzy__A3HcjjXcXN-HFEYQk-/view?usp=sharing",
            "_blank"
        );
    }

    return(
        <>
        <div id='home' className='home'>
            <div className='left-home'>
                <p>Hello!<img className='hello' src='https://media.tenor.com/4BkYeeOwEUgAAAAC/waving-wave.gif'/>
                    <br/> I am Aishwarya Kadam. I am a Web Developer.
                    <br/>
                    <button onClick={handleChange}>RESUME</button>
                </p>
            </div>
            <div className='right-home'>
                <img src='https://media.tenor.com/YNqsJbmb_yMAAAAd/coding.gif'/>
            </div>
        </div>
        </>
    )
}
export default Home;