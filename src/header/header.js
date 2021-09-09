import header from './css/header.module.css';
import logo from '../logo.svg';

console.log(header);

const Header = (e) => {
    return (
        <header className={header.header}>
            <div className={header.headerWrapper}>
                <div className={header.headerLogo}>
                    <img width="60" height="65" src={logo} alt="Logo site"/>
                </div>
                <nav>
                    <ul className={header.navList}>
                        <li>
                            <a className={header.navLink} href="#">Home</a>
                        </li>
                        <li>
                            <a className={header.navLink} href="#">About</a>
                        </li>
                        <li>
                            <a className={header.navLink} href="#">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;