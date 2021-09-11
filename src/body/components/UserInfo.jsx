const UserInfo = (e) => {
    return (
        <div className="user">
            <div className="user-image">
                <img src={e.UserImage} alt="User photo"/>
            </div>
            <div className="user-info">
                <h1 className="user-name">Bogdan Lesko</h1>
                <p className="user-birth">Date of Birth: 5 january</p>
                <p className="user-city">City: Myropol</p>
                <p className="user-education">Education: KNUTD'18</p>
                <p className="user-site">Web Site: https://vallaskes.com.ua</p>
            </div>
        </div>
    )
};

export default UserInfo;