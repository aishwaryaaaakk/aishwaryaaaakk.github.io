import './Skills.css'
function Skills(){
    return(
        <>
        <div id='skills' className='main'>
            <div className='logos'>
                <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'/>
                <p>HTML</p>
            </div>
            <div className='logos'>
                <img src='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png'/>
                <p>CSS</p>
            </div>
            <div className='logos'>
                <img src='https://cdn.worldvectorlogo.com/logos/javascript-1.svg'/>
                <p>JavaScript</p>
            </div>
            <div className='logos'>
                <img src='https://styles.redditmedia.com/t5_2su6s/styles/communityIcon_4g1uo0kd87c61.png'/>
                <p>React</p>
            </div>
        </div>
        </>
    )
}
export default Skills;