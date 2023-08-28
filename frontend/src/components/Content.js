import '../styles/Content.css';
import Text1 from './ContentC/MainText.js';
import Image1 from './ContentC/Image1.js';


function Content({showContact}) {
  return (
    <div className = "contentContainer">
        <Text1 />
        <Image1 showContact={showContact}/>
    </div>
  );
}

export default Content;
