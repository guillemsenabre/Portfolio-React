import "../../styles/ContentCss/Image1.css"

function Image1({showContact}) {
    return (
        <div className={`imageContainer ${showContact ? 'fadeOut' : ''}`}>
            <img src="/images/gui_cube_blur.png" alt = "Test" className = "gui_cube"/>
        </div>
    );
}

export default Image1;