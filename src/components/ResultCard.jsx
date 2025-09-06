export default function ResultCard({ result }) {
  return (
    <div className="mt-6 p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold text-indigo-600">Analysis Result</h2>

      {/* Adjust this based on your backend’s response shape */}
      <pre className="mt-2 text-gray-700 whitespace-pre-wrap">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}
