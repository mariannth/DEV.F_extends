import Tweet from "./Tweet";

const TweetList = ({ tweets, onLike, onComment }) => {
    return (
        <div>
            {tweets.length === 0 ? (
                <p className="text-muted">No hay tweets aún.</p>
            ) : (
                tweets.map((tweet) => (
                    <Tweet
                        key={tweet.id}
                        tweet={tweet}
                        onLike={onLike}
                        onComment={onComment}
                    />
                ))
            )}
        </div>
    );
};

export default TweetList;
