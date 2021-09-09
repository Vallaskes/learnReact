import './css/main.scss';
import PostsViews from "./components/postsViews";

let facebookCoverImage = 'https://scontent.fiev21-1.fna.fbcdn.net/v/t31.18172-8/p600x600/1273914_515584715189988_210852689_o.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=XBWFFLIf7TwAX9wKy4n&_nc_ht=scontent.fiev21-1.fna&oh=073ff6e897e65c5dd9f1760fa3744390&oe=615E37E1';
let facebookUserImage = 'https://scontent.fiev21-2.fna.fbcdn.net/v/t1.6435-1/p200x200/35162066_1765423210206126_3518510438075596800_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=7206a8&_nc_ohc=Iq0it06sOf0AX8iGQy8&tn=YfqRR9OnHQxss8MK&_nc_ht=scontent.fiev21-2.fna&oh=8bf9199c98bd9ee7446f9b1afefbac9a&oe=615F7F42';

const Main = () => {
    return (
        <main className="main">
            <div className="wrapper main-wrapper">
                <div className="cover-image">
                    <img src={facebookCoverImage} alt="Profile cover image"/>
                </div>
                <div className="user">
                    <div className="user-image">
                        <img src={facebookUserImage} alt="User photo"/>
                    </div>
                    <div className="user-info">
                        <h1 className="user-name">Bogdan Lesko</h1>
                        <p className="user-birth">Date of Birth: 5 january</p>
                        <p className="user-city">City: Myropol</p>
                        <p className="user-education">Education: KNUTD'18</p>
                        <p className="user-site">Web Site: https://vallaskes.com.ua</p>
                    </div>
                </div>
                <div className="posts">
                    <div className="post-area">
                        <form className="post-form" action="/">
                            <textarea name="textarea" id="form-text" className="form-text" cols="20" rows="5">
                                Your news...
                            </textarea>
                            <button id="form-send" className="button form-send">Send</button>
                        </form>
                    </div>
                    <PostsViews postUserImage={facebookUserImage} />
                </div>
            </div>
        </main>
    )
};

export default Main;