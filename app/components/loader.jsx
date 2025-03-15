export default function LoadingBar() {
  return (
    <div className="max-w-md mx-auto p-4">
        <div className="relative mt-4 h-2 w-full bg-gray-900 rounded overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-1/3 bg-gray-200 animate-slide"></div>
        </div>
        <p className="animate-pulse py-4 text-center text-blue-50 italic space-x-0.5">Fecting<span className="animate-ping">...</span></p>
    </div>
  );
}
