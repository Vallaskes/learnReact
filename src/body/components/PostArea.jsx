const PostArea = () => {
    return (
        <div className="post-area">
            <form className="post-form" action="/">
                            <textarea name="textarea" id="form-text" className="form-text" cols="20" rows="5">
                                Your news...
                            </textarea>
                <button id="form-send" className="button form-send">Send</button>
            </form>
        </div>
    )
};

export default PostArea;