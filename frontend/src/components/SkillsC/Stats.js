import '../../styles/SkillsCss/Stats.css';
import '../../styles/Skills.css';
import '../../styles/Images.css';


function Stats() {
    return (
        <div className='statsContainer'>
            <img src="/images/media/html.png" alt = "Html Img" className='html_img'/>
            <img src="/images/media/css3.png" alt = "Css Img" className='css_img'/>
            <img src="/images/media/js.png" alt = "Js Img" className='js_img'/>
            <img src="/images/media/py2.png" alt = "Py Img" className='py_img'/>
        </div>
    );
}


export default Stats;