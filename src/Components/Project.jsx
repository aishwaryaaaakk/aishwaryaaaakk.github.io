import './Project.css'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
function Project(){
    return(
        <>
        <div >
            <div id='projects' className='cont'>
                <div className='card'>
                    <img src={project1}/>  
                    <div>
                        <p>It is a project which was based on a theme of superhero.
                            I made a resume of Ganpati Bappa. It is build and styled using the technologies like HTML & CSS.
                        </p>
                        <div className='btns'>
                           <button>Git Repo</button>
                           <button ><a className='site' href='https://zingy-sunshine-87b92e.netlify.app/'>View Site</a></button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img src={project2}/>  
                    <div>
                        <p>I made this Best Buy clone website. It is made using HTML, CSS, React. Basically it is like a E-Commerce website which allows a person to shop from various categories.</p>
                        <div className='btns'>
                        <button><a className='git' href='https://github.com/aishwaryaaaakk/assignment/tree/main/PROJECT/New%20folder/bestBuy-app'>Git Repo</a></button>
                        <button >View Site</button>
                        </div>
                    </div>
                </div>
                <div className='card'>
                    <img src={project3}/>  
                    <div>
                        <p>It is a Cake website for buying cupcakes, pastries, cakes, etc.
                            This website is build and decorated using HTML & CSS.
                        </p>
                        <div className='btns'>
                        <button><a className='git' href='https://github.com/aishwaryaaaakk/assignment/tree/main/CAKEWEBSITE/cake_website'>Git Repo</a></button>
                        <button><a className='site' href='https://6568eff4b6210d07b3a650d8--magnificent-cucurucho-0089f9.netlify.app/'>View Site</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Project;