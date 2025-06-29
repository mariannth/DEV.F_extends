import { useState } from "react";

const Tweet = ({ tweet, onLike, onComment }) => {
    const [commentText, setCommentText] = useState("");

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!commentText.trim()) return;
        onComment(tweet.id, commentText);
        setCommentText("");
    };

    return (
        <div className="card mb-3">
            <div className="card-body">
                <p>{tweet.text}</p>
                <button className="btn btn-outline-danger btn-sm me-2" onClick={() => onLike(tweet.id)}>
                    ❤️ {tweet.likes}
                </button>

                {/* Mostrar comentarios */}
                {tweet.comments && tweet.comments.length > 0 && (
                    <ul className="list-group list-group-flush mt-2">
                        {tweet.comments.map((comment, index) => (
                            <li key={index} className="list-group-item small">{comment}</li>
                        ))}
                    </ul>
                )}

                {/* Añadir comentario */}
                <form onSubmit={handleCommentSubmit} className="mt-3">
                    <input
                        type="text"
                        className="form-control form-control-sm"
                        placeholder="Escribe un comentario..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                </form>
            </div>
        </div>
    );
};

export default Tweet;
