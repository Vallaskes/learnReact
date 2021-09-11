let lorem = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cupiditate enim expedita fugiat molestiae nostrum placeat quo recusandae saepe tempora!';

const PostsViews = (e) => {
    return (
        <div className="posts-views">
            <div className="post post-id1 post-first">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id3">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id4">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id5">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id6">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id7">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id8">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id9">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
            <div className="post post-id10 post-last">
                <img src={e.postUserImage} alt="User photo" className="post-user-image user-image"/>
                <div className="post-text">
                    <p>{lorem}</p>
                </div>
            </div>
        </div>
    )
};

export default PostsViews;