import { useHistoryStore } from "../store/historyStore";
import Navbar from "../components/Navbar";

export default function History() {
  const { history, clearHistory } = useHistoryStore();

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">📜 Scan History</h1>

        {history.length === 0 ? (
          <p className="text-gray-600">No history yet.</p>
        ) : (
          <div className="space-y-4">
            {history.map((item) => (
              <div
                key={item.id}
                className="bg-white shadow-md rounded-lg p-4"
              >
                <h2 className="font-semibold">{item.tool}</h2>
                <p className="text-sm text-gray-600">Input: {item.input}</p>
                <p className="text-sm text-gray-800">
                  Result: {item.result || "Pending..."}
                </p>
              </div>
            ))}

            <button
              onClick={clearHistory}
              className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Clear History
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
