import './About.css'
import myphoto from '../assets/myphoto.jpg'
function About(){
    return(
        <>
        <div id='about' className='About'>
            <div className='container'>
            <div className='left-about'>
                <img src={myphoto}/>
            </div>
            <div className='right-about'>
                <p>Hello! <br/>I am Aishwarya Kadam. I am a Web Developer. Proficient in front-end technologies like HTML, CSS, JavaScript, React. Demonstrated ability to translate design concepts into responsive and intuitive user interfaces. Adept at collaborating with cross-functional teams to deliver high-quality, performance-optimized web solutions.</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default About;