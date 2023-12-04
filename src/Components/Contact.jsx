import './Contact.css'
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
function Contact(){
    return(
        <>
        
        <div id='contact' className='contact'>
        <p id='main-p'>You can contact me on:</p>
            <div className='box'>
                <div className='details'>
                    <a className='logo' href=''><MdEmail /></a>
                    <p>aishwaryakadam0711@gmail.com</p>
                </div>
                <div className='details'>
                    <a className='logo' href='https://www.linkedin.com/in/aishwarya-kadam-84609b214/'><GrLinkedin /></a>
                    <a className='user' href='https://www.linkedin.com/in/aishwarya-kadam-84609b214/'><p>Aishwarya Kadam</p></a>
                </div>
                <div className='details'>
                    <a className='logo' href=''><FaPhoneSquareAlt /></a>
                    <p>+91 8879183449</p>
                </div>
                <div className='details'>
                    <a className='logo' href='https://github.com/aishwaryaaaakk'><FaGithubSquare /></a>
                    <a className='user' href='https://github.com/aishwaryaaaakk'><p>aishwaryaaaakk</p></a>
                </div>
            </div>

        </div>
        </>
    )
}
export default Contact;