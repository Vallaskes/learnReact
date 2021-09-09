import './css/sidebar.css';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <nav className="sidebar-nav nav">
                <ul className="nav-list">
                    <li className="nav-item item-1">
                        <a href="#" className="nav-link">Profile</a>
                    </li>
                    <li className="nav-item item-2">
                        <a href="#" className="nav-link">Messages</a>
                    </li>
                    <li className="nav-item item-3">
                        <a href="#" className="nav-link">News</a>
                    </li>
                    <li className="nav-item item-4">
                        <a href="#" className="nav-link">Music</a>
                    </li>
                    <li className="nav-item item-5">
                        <a href="#" className="nav-link">Setting</a>
                    </li>
                </ul>
            </nav>
        </aside>
    )
};

export default Sidebar;