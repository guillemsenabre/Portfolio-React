import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><a href='/'>ABOUT</a></li>
                    <li className = "contactButton"><a href='/'>CONTACT</a></li>
                    <li><a href='/'>PROJECTS</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;