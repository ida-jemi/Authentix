export default function Spinner() {
  return (
    <div className="flex justify-center items-center py-6">
      <div className="w-10 h-10 border-4 border-indigo-400 border-t-transparent rounded-full animate-spin"></div>
      <span className="ml-3 text-indigo-600 font-medium">Analyzing...</span>
    </div>
  );
}
