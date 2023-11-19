export function Alert({ message }) {
  return (
    <div className="bg-red-600 border-4 border-red-700 text-white px-4 py-3 rounded-3xl relative mb-2 text-center text-2xl">
      <span className="sm:inline block">{message}</span>
    </div>
  );
}
