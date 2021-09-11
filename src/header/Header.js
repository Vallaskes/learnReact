import headerStyle from './css/Header.module.scss';
import logo from '../logo.svg';

const Header = () => {
    return (
        <header className={headerStyle.header}>
            <div className={headerStyle.wrapper}>
                <div className={headerStyle.logo}>
                    <img width="60" height="65" src={logo} alt="Logo site"/>
                </div>
                <nav>
                    <ul className={headerStyle.list}>
                        <li>
                            <a className={headerStyle.link} href="#">Home</a>
                        </li>
                        <li>
                            <a className={headerStyle.link} href="#">About</a>
                        </li>
                        <li>
                            <a className={headerStyle.link} href="#">Contacts</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
};

export default Header;