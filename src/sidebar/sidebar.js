import sidebarStyle from './css/sidebar.module.css';
import headerStyle from '../header/css/header.module.css'

let listStyle = sidebarStyle.list + ' ' + headerStyle.list;

const Sidebar = () => {
    return (
        <aside className={sidebarStyle.sidebar}>
            <nav className={sidebarStyle.nav}>
                <ul className={listStyle}>
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