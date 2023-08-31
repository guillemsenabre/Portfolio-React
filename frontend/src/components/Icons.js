import '../styles/Icons.css';

function Icons ({showContact}) {
    return (
        <div className={`iconsContainer ${showContact ? 'fadeIn' : ''}`}>
            <img src="/images/gitInv.png" alt = "Github Img" className='githubImg'/>
            <img src="/images/gmailInv.png" alt = "Gmail Img" className='gmailImg'/>
        </div>
    );
}

export default Icons;