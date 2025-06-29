import { useState } from "react";

const TweetForm = ({ onAddTweet }) => {
    const [text, setText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!text.trim()) return;

        onAddTweet(text);
        setText("");
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <textarea
                className="form-control mb-2"
                rows="3"
                placeholder="¿Qué estás pensando?"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button className="btn btn-primary w-100" type="submit">Tweetear</button>
        </form>
    );
};

export default TweetForm;
