import { useEffect, useState } from "react";
import TweetForm from "../Components/TweetForm";
import TweetList from "../Components/TweetList";

const Home = ({ user }) => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("tweets")) || [];
    setTweets(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("tweets", JSON.stringify(tweets));
  }, [tweets]);

  const addTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
      comments: []
    };
    setTweets([newTweet, ...tweets]);
  };

  const likeTweet = (id) => {
    const updated = tweets.map(tweet =>
      tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
    );
    setTweets(updated);
  };

  const commentTweet = (id, comment) => {
    const updated = tweets.map(tweet =>
      tweet.id === id
        ? { ...tweet, comments: [...tweet.comments, comment] }
        : tweet
    );
    setTweets(updated);
  };

  return (
    <div>
      <h2 className="text-center mb-4">Inicio</h2>

      {user ? (
        <>
          <TweetForm onAddTweet={addTweet} />
          <TweetList tweets={tweets} onLike={likeTweet} onComment={commentTweet} />
        </>
      ) : (
        <p className="text-center text-muted">Inicia sesión para ver y publicar tweets.</p>
      )}
    </div>
  );
};

export default Home;
