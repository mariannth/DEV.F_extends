import ChatBox from "./components/ChatBox";
import History from "./components/History";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 text-white">
      <main className="py-10">
        <ChatBox />
        <History />
      </main>
    </div>
  );
}

export default App;
