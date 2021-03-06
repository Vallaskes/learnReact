import sidebarStyle from './css/Sidebar.module.scss';
import headerStyle from '../header/css/Header.module.scss'

const Sidebar = () => {
    return (
        <aside className={sidebarStyle.sidebar}>
            <nav className={sidebarStyle.nav}>
                <ul className={`${sidebarStyle.list} ${headerStyle.list}`}>
                    <li>
                        <a href="#" className={headerStyle.link}>Profile</a>
                    </li>
                    <li>
                        <a href="#" className={headerStyle.link}>Messages</a>
                    </li>
                    <li>
                        <a href="#" className={headerStyle.link}>News</a>
                    </li>
                    <li>
                        <a href="#" className={headerStyle.link}>Music</a>
                    </li>
                    <li>
                        <a href="#" className={headerStyle.link}>Setting</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};

export default Sidebar;