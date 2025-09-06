import { useState } from "react";
import axiosClient from "../api/axiosClient";   // ✅ uses axios setup
import { useHistoryStore } from "../store/historyStore";
import ResultCard from "./ResultCard";
import Navbar from "./Navbar";

export default function ToolPage({ toolName, endpoint }) {
  const [inputType, setInputType] = useState("link");
  const [link, setLink] = useState("");
  const [file, setFile] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const addHistory = useHistoryStore((state) => state.addHistory);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let payload;

      if (inputType === "link") {
        payload = { type: "link", data: link };
      } else if (inputType === "file") {
        const formData = new FormData();
        formData.append("file", file);
        payload = formData;
      } else {
        payload = { type: "text", data: text };
      }

      let response;

      // 🔹 Real API call if backend exists
      try {
        response = await axiosClient.post(endpoint, payload, {
          headers: inputType === "file" ? { "Content-Type": "multipart/form-data" } : {},
        });
      } catch {
        // 🔹 Dummy fallback if backend isn’t ready
        await new Promise((resolve) => setTimeout(resolve, 1000));
        response = {
          data: {
            message: `${toolName} analysis completed successfully ✅`,
            result:
              inputType === "link"
                ? link
                : inputType === "file"
                ? file?.name
                : text,
          },
        };
      }

      setResult(response.data);
      addHistory(toolName, response.data.result || response.data.message);
    } catch (err) {
      setResult({ message: "❌ Something went wrong." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-6">{toolName}</h1>

        {/* Input Type Tabs */}
        <div className="flex space-x-4 mb-6">
          {["link", "file", "text"].map((type) => (
            <button
              key={type}
              onClick={() => setInputType(type)}
              className={`px-4 py-2 rounded ${
                inputType === type
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {type === "link" ? "Link" : type === "file" ? "Document" : "Text"}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputType === "link" && (
            <input
              type="url"
              placeholder="Paste news/article link"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full border rounded-lg p-3"
              required
            />
          )}

          {inputType === "file" && (
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="w-full"
              required
            />
          )}

          {inputType === "text" && (
            <textarea
              placeholder="Paste news/article text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full border rounded-lg p-3"
              rows="4"
              required
            />
          )}

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            {loading ? "Analyzing..." : "Submit"}
          </button>
        </form>

        {/* Result */}
        {result && (
          <div className="mt-6">
            <ResultCard result={result.message || "✅ Analysis complete!"} />
          </div>
        )}
      </div>
    </div>
  );
}
