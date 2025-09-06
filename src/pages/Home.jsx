import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          🔍 Welcome to Authentix
        </h1>
        <p className="text-gray-600 mb-10">
          A smart toolkit to detect fake news, simplify legal documents,
          identify media bias, and scan privacy policies.  
          Choose a tool below to get started:
        </p>

        {/* Grid of tools */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Fake News */}
          <Link
            to="/fake-news"
            className="bg-white shadow-md rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              📰 Fake News
            </h2>
            <p className="text-gray-600 text-sm">
              Upload a news link or video to check authenticity.
            </p>
          </Link>

          {/* Legal Analyzer */}
          <Link
            to="/legal-analyzer"
            className="bg-white shadow-md rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              ⚖️ Legal Analyzer
            </h2>
            <p className="text-gray-600 text-sm">
              Simplify legal documents and extract key insights.
            </p>
          </Link>

          {/* Bias Check */}
          <Link
            to="/bias-check"
            className="bg-white shadow-md rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              🎯 Bias Check
            </h2>
            <p className="text-gray-600 text-sm">
              Analyze articles for political or cultural bias.
            </p>
          </Link>

          {/* Privacy Scan */}
          <Link
            to="/privacy-scan"
            className="bg-white shadow-md rounded-2xl p-6 transition transform hover:scale-105 hover:shadow-xl hover:bg-indigo-50"
          >
            <h2 className="text-xl font-semibold text-indigo-600 mb-2">
              🔒 Privacy Scan
            </h2>
            <p className="text-gray-600 text-sm">
              Scan policies for risks, hidden terms, and data usage.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
