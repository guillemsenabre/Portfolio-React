import '../../styles/SkillsCss/About.css';
import '../../styles/Skills.css';


//import Button from '../Button';


function About({ cmdImg, title, content}) {
    return (

        /*<div className='aboutContainer'>
            <div className='aboutButton'>
                <Button>ABOUT</Button>
            </div>
        </div>*/

        <div className='aboutContainer'>
            <div className="cmd-window">
                <div className="cmd-title">
                    {cmdImg && <img src={cmdImg} alt="Command Img" />} {title}
                </div>
                <div className="cmd-content">{content}</div>
            </div>
        </div>
    );
}


export default About;